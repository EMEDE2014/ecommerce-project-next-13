import {
  ClerkProvider,
  
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ModalPrivider } from '@/providers/modal-providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
        
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModalPrivider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}