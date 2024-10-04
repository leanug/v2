import { FaGithub } from 'react-icons/fa'

import { siteConfig } from '@/config/site'

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <li>
          <a
            href="https://github.com/leanug/v2"
            className="flex gap-1.5 items-center btn btn-link p-0"
          >
            <FaGithub
              size={24} // Customize size here
            />
            Source
          </a>
        </li>
        <li className="flex gap-1.5 items-center">
          <a
            href={siteConfig.links.feedback}
            className="flex gap-1.5 items-center btn btn-link p-0"
          >
            Feedback
          </a>
        </li>
        <li></li>
      </ul>
    </footer>
  )
}

export default Footer
