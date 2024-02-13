import { FormNewUser } from "@/components/widgets/user-creation/FormNewUser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormNewUser />
    </main>
  );
}
