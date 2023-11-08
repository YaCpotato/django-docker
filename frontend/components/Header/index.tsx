"use client";

import styles from "./header.module.scss";

import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="headerArea">
      <h1 className="headerText" onClick={() => router.push("/")}>
        Next.jsの勉強
      </h1>
    </div>
  );
};