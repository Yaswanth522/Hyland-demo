import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { BOT_ID, HOST, YM_LOADER_SRC } from "../utils/ymWidget";

export default function ChatWidget() {
  const { user } = useAuth();
  const [scriptReady, setScriptReady] = useState(!!window.ChatWidget);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (window.ChatWidget) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = YM_LOADER_SRC;
    script.async = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, []);

  // Re-init on login/logout so the payload carries the current email.
  // init() a second time without destroy() is a no-op in the SDK.
  useEffect(() => {
    if (!scriptReady || typeof window.ChatWidget === "undefined") return;

    if (hasInitialized.current && typeof window.ChatWidget.destroy === "function") {
      window.ChatWidget.destroy();
    }

    window.ChatWidget.init({
      yellowMessenger: {
        botId: BOT_ID,
        host: HOST,
        payload: {
          ...(user?.email ? { email: user.email } : {}),
        },
      },
    });
    hasInitialized.current = true;
  }, [scriptReady, user?.email]);

  return null;
}
