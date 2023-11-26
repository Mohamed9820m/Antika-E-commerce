'use client'
import React from "react";
import Link from "next/link";
import styles from './Quality.module.css'; // Import CSS module

const Quality = () => {
  return (
    <div className={styles["quality-container"]}>
      <h1 className={styles["quality-title"]}>Highest Quality Collection</h1>
      <Link href="/explore">
        <span className={styles["btn-quality"]}>explore now!</span>
      </Link>
    </div>
  );
};

export default Quality;