import ModalNewUser from "@/components/widgets/user-creation/ModalNewUser";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ModalNewUser />
    </main>
  );
}
