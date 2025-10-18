import Image from "next/image";
import Link from "next/link";

type BeansIconProps = {
  label: string;      // ボタンのテキスト
  href: string;       // 遷移先リンク
  className?: string; // 追加クラス（任意）
};

export default function BeansIcon({ label, href, className = "" }: BeansIconProps) {
  return (
    <Link href={href} className={`icon-button uppercase tracking-wide ${className}`}>
      <Image src="/icons/beans.png" alt="" width={52} height={48} />
      <span>{label}</span>
    </Link>
  );
}