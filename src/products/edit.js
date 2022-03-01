import {get , update} from "../API/product";
const edit_sp = {
    async render(id) { 
        const { data } = await get(id);
        return /*html*/`
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <form id="form-edit">
                    <input type="text" id="title-post" class="border border-black" value="${data.name}" placeholder="Title" /> </br>
                    <input type="file" id="img-post" class="border border-black"  placeholder="Image" /> </br >
                    <input type="number" id="price" class="border border-black" min="1" value="${data.price}" placeholder="" /> </br >
                    <textarea name="" id="desc-post" cols="30" rows="10" class="border border-black">${data.desc}</textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
        `
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post"),
                desc: document.querySelector("#desc-post").value,
            });
            toastr.success("Cập nhật thành công");
            document.location.href = "/";
        });
    },
};
export default edit_sp;