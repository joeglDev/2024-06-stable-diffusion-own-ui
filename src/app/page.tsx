'use client';
import { UserInputForm } from "@/components/user-input/UserInputForm";
import { ImageDisplay } from "@/components/image-display/ImageDisplay";
import { FlexRowContainer } from "@/components/main-page.style";
import { AppContextProvider } from "@/context/AppContext";


export default function Home() {
  return (
    <main>
      <FlexRowContainer>
        <AppContextProvider>
          <UserInputForm />
          <ImageDisplay />
        </AppContextProvider>
      </FlexRowContainer>
    </main>
  );
}
