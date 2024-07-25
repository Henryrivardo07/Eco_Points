import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout";

export default function EditUser() {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "081234567890",
    address: "Jl. Contoh No. 123, Jakarta",
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Edit Status Pengguna</CardTitle>
            <CardDescription>Edit status akun pengguna yang terdaftar di aplikasi.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label>Nama Pengguna</Label>
                <p>{userData.name}</p>
              </div>
              <div>
                <Label>Email</Label>
                <p>{userData.email}</p>
              </div>
              <div>
                <Label>Telepon</Label>
                <p>{userData.phone}</p>
              </div>
              <div>
                <Label>Alamat</Label>
                <p>{userData.address}</p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="status">Status Akun</Label>
                <Select>
                  <SelectTrigger id="status" aria-label="Pilih status akun">
                    <SelectValue placeholder="Pilih status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="ghost" className="text-muted-foreground">
              Batalkan
            </Button>
            <Button className="bg-green-700 text-white hover:bg-green-800">Simpan Perubahan</Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}