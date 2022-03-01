import toastr from "toastr";
import {getAll,remote} from "../API/product";

const list_sp = {
    async render() {
      const { data } = await getAll();
        return /*html*/`
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-0">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xử lý</th>
              </tr>
            </thead>
            <a href="/add">Add product</a>
            <tbody class="bg-white divide-y divide-gray-200">
            ${data.map((product, index) => /*html*/`
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${product.name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${product.desc}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      ${product.price}
                  </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <a href="/${product.id}/edit">Edit</a>
                        <button data-id=${product.id} class="btn btn-remove inline-block px-4 py-3 text-black bg-indigo-700 rounded hover:bg-red-700 hover:text-white">Delete</button>
                    </td>
                </tr>
            `).join("")}
              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    `},
    afterRender() {
      const btns = document.querySelectorAll(".btn");
      btns.forEach((btn) => {
          const { id } = btn.dataset;
          btn.addEventListener("click", () => {
              const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
              if (confirm) {
                remote(id).then(() => {
                  toastr.success("Xóa thành công");
                  window.location.href = "/";
              })
              }
          });
      });
  },
};
export default list_sp;