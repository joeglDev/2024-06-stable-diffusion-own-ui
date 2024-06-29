'use client';
import { UserInputForm } from "@/components/user-input/UserInputForm";
import styles from "./page.module.css";
import { ImageDisplay } from "@/components/image-display/ImageDisplay";
import { FlexColumnContainer } from "@/components/main-page";

export default function Home() {
  return (
    <main className={styles.main}>
      <FlexColumnContainer>
      <UserInputForm/>
      <ImageDisplay/>
      </FlexColumnContainer>
    </main>
  );
}
