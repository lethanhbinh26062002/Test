import toastr from "toastr";
import {add} from "../API/product";

const add_sp = {
    render() { 
        return /*html*/`
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <form id="form-add">
                    <input type="text" id="title-post" class="border border-black" placeholder="Title" /> </br>
                    <input type="file" id="img-post" class="border border-black"  placeholder="Image" /> </br >
                    <input type="number" id="price" class="border border-black" min="1" value="1" placeholder="" /> </br >
                    <textarea name="" id="desc-post" cols="30" rows="10" class="border border-black"></textarea>
                    <button>Add New</button>
                </form>
            </div>
        </div>
        `
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            add({
                name: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
                price: document.querySelector("#price").value,
            });
            toastr.success("Bạn đã thêm thành công");
            // window.location.href = "/";
        });
    },
};
export default add_sp;