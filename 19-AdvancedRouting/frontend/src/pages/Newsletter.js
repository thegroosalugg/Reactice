import NewsletterSignup from "../components/NewsletterSignup";

export default function NewsletterPage() {
  return (
    <div className="newsletter">
      <h2>Generic Sign Up Page</h2>
      <p>{"I am waiting for a bus. ".repeat(20)}</p>
      <NewsletterSignup />
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
