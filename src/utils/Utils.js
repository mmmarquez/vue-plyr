export function buildNav(medium) {
  let mainNav = [];
  for (let i = 0; i < medium.length; i++) {
    mainNav.push({
      title: medium[i].name,
      slug: medium[i].slug,
      parent: medium[i].parent,
      id: medium[i].id,
      child: getchilds(medium, medium[i].id)
    });
  }
  // x.forEach((medium, index) => {
  //   mainNav.push({
  //     title: medium.name,
  //     slug: medium.slug,
  //     parent: medium.parent,
  //     id: medium.id,
  //     child: getchilds(x, medium.id)
  //   });
  // });

  return mainNav;
}

function getchilds(mediums, id) {
  const childrens = [];
  for (let i = 0; i < mediums.length; i++) {
    if (mediums[i].parent == id) {
      childrens.push(mediums[i]);
    }
  }
  // mediums.forEach((medium, index) => {
  //   if (medium.parent == id) {
  //     childrens.push(medium);
  //   }
  // });

  return childrens;
}

export function cleanNav(nav) {
  let prepNav = [];
  for (let i = 0; i < nav.length; i++) {
    if (nav[i].parent === 0) {
      prepNav.push(nav[i]);
    }
  }
  // nav.forEach(medium => {
  //   if (medium.parent === 0) {
  //     prepNav.push(medium);
  //   }
  // });

  return prepNav;
}
