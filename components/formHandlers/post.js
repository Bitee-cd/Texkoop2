

const postData = async (url, form_values) => {
    const res = await fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    });
    //it returns status of 201 if it was successfull and 400 if not successfull
    if (res.status === 201) {
        return true
      
    } else return false
  };
export default postData; 
