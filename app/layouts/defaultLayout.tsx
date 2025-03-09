import { Outlet } from "react-router";
import Footer from "~/components/microlearning/navigation/footer";
import NavBar from "~/components/microlearning/navigation/navBar";
import { AppSidebar } from "~/components/microlearning/navigation/sideBar";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { ModeToggle } from "~/components/microlearning/dark-mode-toggle";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="lg:mx-32 my-5 mx-6">
        <NavBar>
          <div className="flex items-center space-x-8 gap-x-4">
            <SidebarTrigger />
            <ModeToggle className="mr-4" />
          </div>
        </NavBar>
        <main className="my-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
