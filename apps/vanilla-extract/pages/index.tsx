import { Github, Linkedin, Twitter, Instagram } from '~components/Icon';
import { LayoutContainer } from '~components/LayoutContainer';
import { Seo } from '~components/Seo';

export interface SocialLink {
  label: string;
  url: string;
  icon: JSX.Element;
}

const IndexPage = (): JSX.Element => {
  const links: SocialLink[] = [
    {
      label: 'Github Profile',
      url: 'https://github.com/robertgorbul',
      icon: <Github />,
    },
    {
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/robert-harbul-66a77348/',
      icon: <Linkedin />,
    },
    {
      label: 'Twitter Profile',
      url: 'https://twitter.com/robertgorbul',
      icon: <Twitter />,
    },
    {
      label: 'Instagram Profile',
      url: 'https://instagram.com/robertgorbul',
      icon: <Instagram />,
    },
  ];

  return (
    <LayoutContainer>
      <Seo title="Welcome" />
      <div>
        <div className="m-0 bg-light text-center tracking-tighter px-5 xxl:px-16">
          <div className="m-0 bg-light text-center py-1-vru xxl:py-1-vru-xxl">
            <h1 className="text-h2 xxl:text-h2-xxl m-0">Robert Harbul</h1>
            <p className="text-h6 xxl:text-h6-xxl">Software Engineer</p>
          </div>
        </div>
        <div className="flex-auto bg-light2 shadow-inner px-5 xxl:px-16">
          <section className="flex flex-row items-center justify-center py-1-vru xxl:py-1-vru-xxl">
            {links.map((item: SocialLink) => (
              <a
                key={item.url}
                className="px-2 xxl:px-4"
                href={item.url}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </section>
        </div>
        <div className="bg-light3 tracking-tight shadow-inner">
          <div className="text-center px-5 xxl:px-16 py-1-vru xxl:py-1-vru-xxl">
            ©{new Date().getFullYear()}, Built by{' '}
            <span className="font-semibold">@robertgorbul</span> with{' '}
            <a
              href="https://nextjs.org/"
              aria-label="Next.js by Vercel - The React Framework"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default IndexPage;
