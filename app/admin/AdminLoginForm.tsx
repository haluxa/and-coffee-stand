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
      className="admin-primary-button"
    >
      {pending ? "確認中..." : "ログイン"}
    </button>
  );
}

export function AdminLoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="admin-card admin-form admin-login-form">
      <div>
        <p className="admin-eyebrow">Protected Area</p>
        <h1 className="admin-card-title">管理画面ログイン</h1>
        <p className="admin-card-text">
          パスワードを入力すると管理ページへ入れます。
        </p>
      </div>

      <div className="admin-field">
        <label htmlFor="admin-password" className="admin-label">
          パスワード
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          required
          className="admin-input"
        />
      </div>

      {state.error ? <p className="admin-error">{state.error}</p> : null}

      <SubmitButton />
    </form>
  );
}
