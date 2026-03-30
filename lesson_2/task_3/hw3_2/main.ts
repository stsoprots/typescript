interface IResipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[]
}

let divBox = document.getElementById('box') as HTMLDivElement;
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((res: {recipes: IResipe[]}) => {
        console.log(res.recipes);

        for (let recipe of res.recipes) {
            let div = document.createElement('div') as HTMLDivElement;
            div.classList.add('recipe-container');
            let h1 = document.createElement('h1') as HTMLHeadingElement;
            h1.innerText = `  
                "id" : ${recipe.id},
                "name": ${recipe.name};`
            div.appendChild(h1);
            let ul = document.createElement('ul') as HTMLUListElement;
            for (let ingredient of recipe.ingredients) {
                let li = document.createElement('li') as HTMLLIElement;
                li.innerText = `${ingredient}`
                ul.appendChild(li);
                div.appendChild(ul);
            }
            for (let instruction of recipe.instructions) {
                let p2 = document.createElement('p') as HTMLParagraphElement;
                p2.innerText = `${instruction}`;
                div.appendChild(p2);
            }
            let p3 = document.createElement('p') as HTMLParagraphElement;
            p3.innerText = ` 
                "prepTimeMinutes": ${recipe.prepTimeMinutes},
                "cookTimeMinutes": ${recipe.cookTimeMinutes},
                "servings": ${recipe.servings},
                "difficulty": ${recipe.difficulty},
                "cuisine": ${recipe.cuisine},
                "caloriesPerServing": ${recipe.caloriesPerServing},`
            div.appendChild(p3);
            for (let tag of recipe.tags) {
                let p4 = document.createElement('p') as HTMLParagraphElement;
                p4.innerText = `Tags: ${tag}`;
                div.appendChild(p4);
            }
            let p5 = document.createElement('p') as HTMLParagraphElement;
            p5.innerText = `
                "userId": ${recipe.userId},
                "rating": ${recipe.rating},
                "reviewCount": ${recipe.reviewCount},
                `
            div.appendChild(p5);
            let img = document.createElement('img') as HTMLImageElement;
            img.src = recipe.image;
            div.appendChild(img);

            for (let type of recipe.mealType) {
                let p6 = document.createElement('p') as HTMLParagraphElement;
                p6.innerText = `Type: ${type}`;
                div.appendChild(p6);
            }
            divBox.appendChild(div)
        }
    });