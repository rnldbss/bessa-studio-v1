import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export function Social() {
  return (
    <ul className="fixed bottom-10 right-4 z-30 hidden flex-col gap-4 text-3xl sm:flex">
      <li>
        <BsLinkedin />
      </li>
      <li>
        <BsGithub />
      </li>
    </ul>
  );
}
