import Navigo from "navigo";
import list_sp from "./products/index";
import add_sp from "./products/add";
import edit_sp from "./products/edit";
const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if (content.afterRender) await content.afterRender(id);
}; 
router.on({
   "/" : () => print(list_sp),
   "/add": () => print(add_sp),
   "/:id/edit": ({data}) => print(edit_sp, data.id),
});

router.resolve();
