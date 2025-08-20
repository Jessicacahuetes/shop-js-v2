import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl text-center mb-6 uppercase tracking-wider">
        welcome back !
      </h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
