
export async function getCategory() {

    try {
        const response = await fetch(`http://10.0.2.2:3000/category`);
        const responseJson = await response.json();
        // console.log(`RES ${JSON.stringify(responseJson)}`)
        return responseJson;
    } catch(error){
        console.error(error);
    }
}

export async function addCategory(category) {
    try {
        const response = await fetch(`http://10.0.2.2:3000/category`,
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
        const response = await fetch(`http://10.0.2.2:3000/category/${categoryId}`,
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

