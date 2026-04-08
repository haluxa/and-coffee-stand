"use client";
//
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "./actions";

const initialState = { error: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        width: "fit-content",
        padding: "10px 16px",
        border: 0,
        borderRadius: "8px",
        background: "#111",
        color: "#fff",
        cursor: pending ? "default" : "pointer",
        opacity: pending ? 0.7 : 1,
      }}
    >
      {pending ? "確認中..." : "ログイン"}
    </button>
  );
}

export function AdminLoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form
      action={formAction}
      style={{
        width: "100%",
        maxWidth: "420px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "24px",
        display: "grid",
        gap: "16px",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>管理画面ログイン</h1>
        <p style={{ marginBottom: 0, color: "#555", lineHeight: 1.6 }}>
          パスワードを入力すると管理ページへ入れます。
        </p>
      </div>

      <div>
        <label htmlFor="admin-password">パスワード</label>
        <input
          id="admin-password"
          name="password"
          type="password"
          required
          style={{
            width: "100%",
            marginTop: "8px",
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
      </div>

      {state.error ? (
        <p
          style={{
            margin: 0,
            color: "#b42318",
            fontSize: "14px",
          }}
        >
          {state.error}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
