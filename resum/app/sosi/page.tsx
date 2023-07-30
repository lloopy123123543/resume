"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function ActiveLink() {
  const router = useRouter()



  return (
    <div>
        
        <Link href={"/"}>
        <button >
        fdsfd
      </button>
        </Link>
    </div>
  )
}

export default ActiveLink