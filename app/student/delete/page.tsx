"use client"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function DeleteStudent() {

    async function  deleteStudent() {
        const id = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("id") : null;
        if (!id) {
            console.error("ID não encontrado nas query params");
            return;
        }
        

        console.log(id)
        const response = await fetch(`https://crudcrud.com/api/792253382952414a85295b574041e86c/students/${id}`,{
            method:"DELETE"
        })

    }
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Estudante
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Deletar Estudante</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>


            <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                <section className="overflow-hidden rounded-3xl border border-border bg-background/95 p-6 shadow-sm ring-1 ring-border/50">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                                Remoção de registro
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                Deletar Estudante
                            </h1>
                        </div>
                        <div className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive shadow-sm ring-1 ring-destructive/15">
                            Esta ação não pode ser desfeita
                        </div>
                    </div>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                        Confirme a exclusão do estudante atual. O registro será removido definitivamente do sistema após clicar no botão abaixo.
                    </p>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <Button variant="destructive" size="lg" onClick={deleteStudent}>
                            Confirmar exclusão
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Verifique se a query string <span className="font-medium text-foreground">id</span> está presente.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}