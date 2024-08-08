import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import Loader from "./componants/Loader";


const queryClient = new QueryClient();
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              marginTop: "10px",
              backgroundColor: "#333",
              color: "#fff",
            },
          }}
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
}

export default App;
