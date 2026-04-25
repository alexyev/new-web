export interface Article {
  title: string;
  url: string;
  platform: 'substack' | 'medium';
  date?: string;
  coverImage?: string;
  /** CSS object-position value, e.g. "center 80%" or "top". Defaults to "top". */
  imagePosition?: string;
}

export const articles: Article[] = [
  {
    title: "The Social Panopticon",
    url: "https://yevch3nko.substack.com/p/the-social-panopticon?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!2mVU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbecfb72a-70ad-4012-9db3-87da77c758e6_1043x1200.jpeg",
    imagePosition: "center 85%",
  },
  {
    title: "On Advice",
    url: "https://yevch3nko.substack.com/p/on-advice?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!_S64!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e9a0d85-2b29-42c9-9deb-bb4003e63bd0_4702x3617.jpeg",
    imagePosition: "center",
  },
  {
    title: "The Magic of Consciousness",
    url: "https://yevch3nko.substack.com/p/the-magic-of-consciousness?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!Qf5T!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F18b07320-ad71-4259-9f71-94deb935636c_2000x1339.jpeg",
  },
  {
    title: "The High Agency Life",
    url: "https://yevch3nko.substack.com/p/the-high-agency-life?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!1myh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff35d7a8d-f2fc-4226-ad23-d3bda242a132_5684x4223.jpeg",
    imagePosition: "center",
  },
  {
    title: "On Expectations",
    url: "https://yevch3nko.substack.com/p/on-expectations?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!wJAt!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13eb4c62-f413-4ae8-8407-e59af46cbc6d_2400x1809.jpeg",
  },
  {
    title: "On the Utility of Philosophy",
    url: "https://yevch3nko.substack.com/p/on-the-utility-of-philosophy",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!7jeI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff615dbee-eac2-48cd-9a3b-b4ad239dc61b_1200x1078.jpeg",
  },
  {
    title: "Steinbeck on the Human Soul",
    url: "https://yevch3nko.substack.com/p/steinbeck-on-the-human-soul?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!x92l!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3e916f1d-102c-4287-a04d-0fb0576eef27_800x478.jpeg",
  },
  {
    title: "New Beginnings",
    url: "https://yevchenko.substack.com/p/new-beginnings?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!sLna!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26769b2c-75a1-4e26-b1c9-7f4fb86095cc_4096x2572.jpeg",
  },
  {
    title: "Sweat on the Water",
    url: "https://yevchenko.substack.com/p/sweat-on-the-water?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!EAdp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38614ec0-41f1-4705-a7d1-04bc77388a21.jpeg",
    imagePosition: "center",
  },
  {
    title: "Making Dreams a Reality",
    url: "https://yevchenko.substack.com/p/making-dreams-a-reality?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!s3hd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcbe0fccf-9fdf-4452-856b-2db7e4712457_2000x1948.jpeg",
  },
  {
    title: "Lessons from a Long Journey",
    url: "https://yevchenko.substack.com/p/lessons-from-a-long-journey?r=tig05",
    platform: "substack",
    coverImage: "https://substackcdn.com/image/fetch/$s_!Nj3r!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2c86600d-4d1b-4ecc-ae1f-b07ed943114b_1200x1539.jpeg",
    imagePosition: "center",
  },
  {
    title: "Using Quantum Computers to Price Options",
    url: "https://medium.com/geekculture/using-quantum-computers-to-price-options-5bd92ab5fe5c",
    platform: "medium",
    coverImage: "https://images.unsplash.com/photo-1534469650761-fce6cc26ac0d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Global Food Crisis: Addressing Disease with Computer Vision",
    url: "https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949",
    platform: "medium",
    coverImage: "https://miro.medium.com/0*8V83xKTBvtGKBcOO",
  },
];
