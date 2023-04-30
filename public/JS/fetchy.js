function fetchy() {
  try {
    fetch("http://localhost:3000/api/v1/courses/1")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        const coursesReference = document.getElementsByClassName("courses")[0];
        coursesReference.style.display = "block";

        let courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<div>${data.name}</div><div>$${data.cost}</div>`;
        coursesReference.appendChild(courseElement);

        // for (const course of data) {
        //   let courseElement = document.createElement("div");
        //   courseElement.classList.add("course");
        //   courseElement.innerHTML = `<div>${course.name}</div><div>$${course.cost}</div>`;
        //   coursesReference.appendChild(courseElement);
        // }
      });
  } catch (err) {
    console.log(err.message);
  }
}
