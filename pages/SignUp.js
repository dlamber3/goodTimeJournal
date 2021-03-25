import Link from 'next/link';
export default function SignUp() {
      return (
        <div
        style={{
          margin: "auto auto",
          width: "800px",
          textAlign: "center",
          background: "#daf6db",
          borderStyle: "groove",
        }}
        >
          <h1>GoodTime, Sign Up</h1>
          <div>
            <p> Enter Email Information: </p>
            <input type="text" id="fname" name="fname"/>
            
            <p> Enter Password: </p>
            <input type="text" id="fname" name="fname"/>

            <p> Enter Name: </p>
            <input type="text" id="fname" name="fname"/>
            <br></br>
            <br></br>

            <Link href="/SignUp">
              <button>Confirm Sign Up</button>
            </Link>
          </div>

        </div>
        
      )
   }