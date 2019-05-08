import Config from 'react-native-config'

export async function getCategory() {

    try {
        const response = await fetch(`${Config.API_GATEWAY_URL}/category`);
        const responseJson = await response.json();
        return responseJson;
    } catch(error){
        console.error(error);
    }
}

export async function addCategory(category) {
    try {
        const response = await fetch(`${Config.API_GATEWAY_URL}/category`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(category)
            }
        );
        const responseJson = await response.json();
        console.log(`Response form POST new category ${JSON.stringify(responseJson)}`)
        return responseJson;
    } catch(error){
        console.error(error);
    }
}

export async function deleteCategory(categoryId) {

    try {
        const response = await fetch(`${Config.API_GATEWAY_URL}/category/${categoryId}`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }
        );
        const responseJson = await response.json();
        console.log(`Response form DELETE category ${JSON.stringify(responseJson)}`)
        return responseJson;
    } catch(error){
        console.error(error);
    }
}

export function transformCategoriesToSections(categories) {
    console.log(`SECTIONS IN ${JSON.stringify(categories)}`)
    group = [];
    if(categories != null && categories != undefined){
        categories.forEach(function (a) {
            if (!this[a.MainCategory]) {
                this[a.MainCategory] = { title: a.MainCategory, data: [] };
                group.push(this[a.MainCategory]);
            }
            this[a.MainCategory].data.push({subCategory: a.SubCategory, categoryId: a.CategoryId, mainCategory: a.MainCategory, label: a.Label});
        }, Object.create(null));



    }
    console.log(`SECTIONS OUT ${JSON.stringify(group)}`)
    return group;
}

