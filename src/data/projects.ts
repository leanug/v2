import simjatiCoverImage from '@/assets/images/projects/simjati-cover-dark-bg.png';
import layoutloomCoverImage from '@/assets/images/projects/layoutloom-cover.png';
import ponyflyCoverImage from '@/assets/images/projects/ponyfly-cover-min.png';

export const projects = [
  {
    title: "Layoutloom",
    text: "Curated website designs across various categories for web developers and ui/ux designers. Design and development.",
    badge: ["Next.js", "Personal project"],
    image: layoutloomCoverImage,
    imgAlt: "Layoutloom",
    link: '',
    url: 'https://www.layoutloom.com/',
  },
  {
    title: "Simjati Club",
    text: "Website development with Webflow",
    badge: ["Webflow", "Client project"],
    image: simjatiCoverImage,
    imgAlt: "Simjati Club",
    link: '',
    url: 'https://www.simjaticlub.com/',
  },
  {
    title: "Ponyfly.net",
    text: "Website design and development with WordPress",
    badge: ["Wordpress", "Client project"],
    image: ponyflyCoverImage,
    imgAlt: "Ponyfly",
    link: '/gallery/ponyfly',
    url: '',
  },
];
