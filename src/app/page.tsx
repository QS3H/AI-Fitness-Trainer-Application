import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>HomePage
      <SignedOut>
        <SignOutButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
};

export default HomePage;