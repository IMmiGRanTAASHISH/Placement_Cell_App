(function(){let e=$("#schedule-new-interview-form");e.submit((function(t){t.preventDefault();const n=t.target.getAttribute("data-id");$.ajax({type:"post",url:`/interview/add-student-interview/${n}`,data:e.serialize(),success:function(e){console.log(e),new Noty({theme:"relax",text:"Interview Scheduled Successfully!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(e){console.log(e.responseText)}})}))})();