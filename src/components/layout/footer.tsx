const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <li>
          <a
            href="https://github.com/leanug/v2"
            className="flex gap-1.5 items-center"
          >
            Source
          </a>
        </li>
        <li className="flex gap-1.5 items-center">Built with Next.js</li>
      </ul>
    </footer>
  )
}

export default Footer
