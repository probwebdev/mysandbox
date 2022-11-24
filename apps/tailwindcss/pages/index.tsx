import { LayoutContainer } from '~components/LayoutContainer';
import { Seo } from '~components/Seo';

export interface IndexPageProps {
  links: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: {
    path: string;
    colorClassname: string;
  };
}

const IndexPage = ({ links }: IndexPageProps): JSX.Element => (
  <LayoutContainer>
    <Seo title="Welcome" />
    <div>
      <div className="m-0 px-5 text-center tracking-tighter xxl:px-16">
        <div className="m-0 text-center py-1-vru xxl:py-1-vru-xxl">
          <h1 className="m-0 text-h2 xxl:text-h2-xxl">Robert Harbul</h1>
          <p className="text-h6 xxl:text-h6-xxl">Software Engineer</p>
        </div>
      </div>
      <div className="flex-auto px-5 xxl:px-16">
        <section className="flex flex-row items-center justify-center py-1-vru xxl:py-1-vru-xxl">
          {links.map((item) => (
            <a
              key={item.url}
              className={`${item.icon.colorClassname} px-2 xxl:px-4`}
              href={item.url}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer me"
            >
              {/* Generated by IcoMoon.io */}
              <svg
                className="h-8 w-8 fill-current xxl:h-10 xxl:w-10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <title>{item.label}</title>
                <path d={item.icon.path} />
              </svg>
            </a>
          ))}
        </section>
      </div>
      <div className="tracking-tight">
        <div className="px-5 text-center py-1-vru xxl:px-16 xxl:py-1-vru-xxl">
          ©{new Date().getFullYear()}, Built by{' '}
          <span className="font-semibold">@probwebdev</span> with{' '}
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

export async function getStaticProps(): Promise<{ props: IndexPageProps }> {
  return {
    props: {
      links: [
        {
          label: 'Github Profile',
          url: 'https://github.com/probwebdev',
          icon: {
            path: 'm256 6.321c-141.37 0-256 114.61-256 256 0 113.11 73.352 209.07 175.07 242.92 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.64-28.425-116.64-126.52 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.98-116.9 126.31 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.66-33.888 174.92-129.81 174.92-242.88 0-141.39-114.62-256-256-256z',
            colorClassname: 'text-social-github',
          },
        },
        {
          label: 'LinkedIn Profile',
          url: 'https://www.linkedin.com/in/robert-harbul-66a77348/',
          icon: {
            path: 'm128 112c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 80h96v288h-96zm160 0h88.553v45.391h1.266c12.32-22.097 42.479-45.391 87.421-45.391 93.473 0 110.76 58.188 110.76 133.87v154.13h-92.305v-136.64c0-32.592-0.667-74.513-48.014-74.513-48.074 0-55.41 35.493-55.41 72.146v139.01h-92.271z',
            colorClassname: 'text-social-linkedin',
          },
        },
        {
          label: 'Twitter Profile',
          url: 'https://twitter.com/probwebdev',
          icon: {
            path: 'm512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5-19.2-20.4-46.5-33.1-76.7-33.1-58 0-105 47-105 105 0 8.2 0.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-0.5-33.4-5.3-47.6-13.1v1.3c0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-0.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-0.5-25.1-1.5 46.6 29.9 101.8 47.2 161.1 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-0.1-9.1-0.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z',
            colorClassname: 'text-social-twitter',
          },
        },
        {
          label: 'Instagram Profile',
          url: 'https://instagram.com/robert.harbul',
          icon: {
            path: 'm423.4 119.3c0 16.955-13.745 30.7-30.7 30.7s-30.7-13.745-30.7-30.7 13.745-30.7 30.7-30.7 30.7 13.745 30.7 30.7zm-167.4 5.2c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5-58.9-131.5-131.5-131.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm0-295.2c68.4 0 76.5 0.3 103.4 1.5 25 1.1 38.5 5.3 47.5 8.8 11.9 4.6 20.5 10.2 29.4 19.1 9 9 14.5 17.5 19.2 29.4 3.5 9 7.7 22.6 8.8 47.5 1.2 27 1.5 35.1 1.5 103.4s-0.3 76.5-1.5 103.4c-1.1 25-5.3 38.5-8.8 47.5-4.6 11.9-10.2 20.5-19.1 29.4-9 9-17.5 14.5-29.4 19.2-9 3.5-22.6 7.7-47.5 8.8-27 1.2-35.1 1.5-103.4 1.5s-76.5-0.3-103.4-1.5c-25-1.1-38.5-5.3-47.5-8.8-11.9-4.6-20.5-10.2-29.4-19.1-9-9-14.5-17.5-19.2-29.4-3.5-9-7.7-22.6-8.8-47.5-1.2-27-1.5-35.1-1.5-103.4s0.3-76.5 1.5-103.4c1.1-25 5.3-38.5 8.8-47.5 4.6-11.9 10.2-20.5 19.1-29.4 9-9 17.5-14.5 29.4-19.2 9-3.5 22.6-7.7 47.5-8.8 26.9-1.2 35-1.5 103.4-1.5zm0-46.1c-69.5 0-78.2 0.3-105.5 1.5-27.2 1.2-45.9 5.6-62.1 11.9-16.9 6.6-31.2 15.3-45.4 29.6-14.3 14.2-23 28.5-29.6 45.3-6.3 16.3-10.7 34.9-11.9 62.1-1.2 27.4-1.5 36.1-1.5 105.6s0.3 78.2 1.5 105.5c1.2 27.2 5.6 45.9 11.9 62.1 6.6 16.9 15.3 31.2 29.6 45.4 14.2 14.2 28.5 23 45.3 29.5 16.3 6.3 34.9 10.7 62.1 11.9 27.3 1.2 36 1.5 105.5 1.5s78.2-0.3 105.5-1.5c27.2-1.2 45.9-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.3-29.5s23-28.5 29.5-45.3c6.3-16.3 10.7-34.9 11.9-62.1 1.2-27.3 1.5-36 1.5-105.5s-0.3-78.2-1.5-105.5c-1.2-27.2-5.6-45.9-11.9-62.1-6.3-17-15-31.3-29.3-45.5-14.2-14.2-28.5-23-45.3-29.5-16.3-6.3-34.9-10.7-62.1-11.9-27.4-1.3-36.1-1.6-105.6-1.6z',
            colorClassname: 'text-social-instagram',
          },
        },
        {
          label: 'Mastodon Profile',
          url: 'https://mastodon.social/@robertgorbul',
          icon: {
            path: 'm494.791 168.083c0-111.064-72.77-143.62-72.77-143.62-36.695-16.854-99.715-23.937-165.147-24.471h-1.621c-65.453 0.533-128.43 7.616-165.125 24.471 0 0-72.77 32.556-72.77 143.62 0 25.43-0.491 55.852 0.32 88.088 2.645 108.632 19.926 215.665 120.344 242.247 46.294 12.245 86.061 14.827 118.083 13.056 58.072-3.2 90.669-20.737 90.669-20.737l-1.92-42.135c0 0-41.495 13.077-88.089 11.498-46.188-1.579-94.915-4.971-102.382-61.676-0.653-4.647-1.025-10.016-1.025-15.472 0-0.148 0-0.296 0.001-0.445v0.023c0 0 45.334 11.094 102.766 13.717 35.115 1.6 68.055-2.070 101.507-6.038 64.151-7.659 120.003-47.19 127.022-83.308 11.029-56.856 10.134-138.82 10.134-138.82zM408.942 311.212h-53.272v-130.542c0-27.521-11.584-41.473-34.731-41.473-25.601 0-38.444 16.554-38.444 49.323v71.448h-52.972v-71.469c0-32.769-12.843-49.323-38.444-49.323-23.148 0-34.731 13.974-34.731 41.473v130.543h-53.272v-134.468c0-27.5 6.998-49.345 21.057-65.496 14.507-16.171 33.473-24.449 57.047-24.449 27.265 0 47.916 10.475 61.57 31.447l13.248 22.252 13.27-22.251c13.654-20.971 34.305-31.447 61.57-31.447 23.553 0 42.539 8.278 57.048 24.449 14.038 16.15 21.036 37.995 21.036 65.496z',
            colorClassname: 'text-social-mastodon',
          },
        },
      ],
    },
  };
}

export default IndexPage;
