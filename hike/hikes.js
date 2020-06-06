import Comments from './comments.js'
// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

//create an array of hikes
const hikeList = [
    {
        id: 1,
        name: "Bechler Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description:
            "Beautiful short hike along the Bechler river to Bechler Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        id: 2,
        name: "Teton Canyon",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions:
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        id: 3,
        name: "Denanda Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description:
            "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
];

const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//on load grab the array and insert it into the page on load

export default class Hikes {
    comment = new Comments()

    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
        this.backButton = this.buildBackButton();
        this.showHikeList()
    }
    // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
    getAllHikes() {
        return hikeList;
    }
    // For the first stretch we will need to get just one hike.
    getHikeByName(hikeName) {
        return this.getAllHikes().find(hike => hike.name === hikeName);
    }
    //show a list of hikes in the parentElement
    showHikeList() {
        this.renderHikeList(this.parentElement, hikeList)
        this.addHikeListener()
    }
    // show one hike with full details in the parentElement
    showOneHike(hikeName) {
        let aHike = this.getHikeByName(hikeName)
        let hikeDetail = renderOneHikeFull(aHike)
        this.parentElement.append(hikeDetail)
    }
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
        // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
        // Need to find the parent's children, which is 'li'
        for (let hike of this.parentElement.children) {
            //attach all the children with addEventListener
            hike.addEventListener('click', (e) => {
                // Using e.target, means the current element I clicked 
                // To get the firstElementChild, which is 'h2'
                let name = e.target.closest('li').firstElementChild.innerHTML
                let aHike = this.getHikeByName(name)
                this.parentElement.innerHTML = ""
                this.parentElement.append(this.renderOneHikeFull(aHike))
                this.comment.renderOneHikeComments(hike.id)
                this.parentElement.append(this.buildBackButton())
            })
        }


    }
    buildBackButton() {
        const backButton = document.createElement("button");
        backButton.innerText = "Back"

        backButton.addEventListener('click', () => {
            this.parentElement.innerHTML = ""
            this.showHikeList()
        })
        return backButton;
    }
    renderOneHikeFull(hike) {
        const item = document.createElement("li");
        item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>Direction</h3>
                <p>${hike.directions}</p>
            </div>
            <div>
                <h3>Leave A Comment</h3>
                <textarea id="textarea"></textarea>
            </div>
    </div>`;

        let addComment = document.createElement('button')
        addComment.innerText = "Send"
        addComment.addEventListener('click', () => {
            let textContent = document.getElementById('textarea')
            this.comment.addComment(hike.id, textContent.value)
            textContent.value = ''
            this.comment.renderOneHikeComments(hike.id)
        })

        item.append(addComment)

        const commentsItem = document.createElement('div')
        commentsItem.innerHTML = ` <h3>Comments</h3>
            <div id="comments">
                <p>Here is the commentssss</p>
                <p>Here is the commentssss</p>
                <p>Here is the commentssss</p>
                <p>Here is the commentssss</p>
                <p>Here is the commentssss</p>
                <p>Here is the commentssss</p>
            </div>`

        item.append(commentsItem)
        document.getElementById('comment-list').innerHTML = ''
        return item;
    }

    renderHikeList(parent, hikes) {
        for (let hike of hikes) {
            // use append because rederOneHikeLight is an object
            parent.append(renderOneHikeLight(hike))
        }
        this.comment.renderCommentList()
    }

}

function renderOneHikeLight(hike) {
    const item = document.createElement("li")
    item.id = hike.id
    item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`
    return item;
}
