export const useExternalLinks = () => {
  const links = document.querySelectorAll('.prose a');
  console.log(links);

  for (const link of links) {
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
    }
  }
};
