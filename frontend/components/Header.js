import Link from 'next/link';

const linkStyle = {
	marginRight: 15,
}

export default function Header() {
	return (
		<div align='center'> 
          <Link href="/SignUp">
              <a style={linkStyle}>SignUp</a>
          </Link>
		</div>
	)
}