import { useUserStore } from "../user/user.store";
import { GetStudentThemeResponse } from "../interfaces";
import { useQuery } from "@tanstack/react-query";
import { getAllThemes } from "../services/themeService";
import { getUserFirstName } from "@/utils/StringUtil";
import Navbar from "@/components/Navbar/Navbar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import PaginationContainer from "@/components/PaginationContainer/PaginationContainer";

export default function HomePage() {
  const user = useUserStore((state) => state.user);

  const { isLoading, error, data } = useQuery<GetStudentThemeResponse>({
    queryKey: ["studentThemes"],
    queryFn: getAllThemes,
  });

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="p-4 flex-1">
        <div className="grid grid-cols-5 gap-6 h-full">
          <div className="col-start-1 col-end-4 ">
            <div className="h-8 flex items-center mb-1">
              <span>Temas</span>
            </div>
            <Separator />
            <div className="mt-2 flex flex-col gap-y-4">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Buscar tema..."
                  className="w-full"
                />
                <Button type="submit">Buscar</Button>
              </div>
              <div className="flex flex-col h-full gap-y-2">
                <ScrollArea className="flex-1">
                  <div className="flex flex-col gap-y-4">
                    {data?.map((theme) => (
                      <Card
                        key={theme.ownerId + theme.label}
                        className="p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <span>{theme.owner.name}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span>{theme.label}</span>
                        </div>
                        <Separator className="mb-2" />
                        <p>{theme.summary}</p>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
                <PaginationContainer />
              </div>
            </div>
          </div>
          <div className="col-start-4 col-end-6">
            <div className="flex items-center justify-between mb-1">
              <span>Meus Temas</span>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full h-8 w-8"
              >
                +
              </Button>
            </div>
            <Separator />
          </div>
        </div>
      </div>
    </div>
  );
}
