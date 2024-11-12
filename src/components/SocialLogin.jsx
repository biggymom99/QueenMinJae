import React from "react";
import { supabase } from "../services/supabaseClient";

const SocialLogin = () => {
  // Google 로그인 함수
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Google 로그인 오류:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google로 로그인</button>
    </div>
  );
};

export default SocialLogin;
