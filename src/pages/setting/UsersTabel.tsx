import { TableComponent } from "@/components/common/ui/TableComponent";
import { getUserColumns } from "./columns";
import { IUsersResponse } from "@/types/project";
import { useDeleteUserFromProjectMutation } from "@/store/project/projectService";

type Props = {
  users: IUsersResponse[];
};
export const UserTable = ({ users }: Props) => {
  const [deleteUser] = useDeleteUserFromProjectMutation();
  const handleDelete = async (id: string) => {
    await deleteUser(id).unwrap();
  };

  const columns = getUserColumns(handleDelete);
  return <TableComponent data={users} columns={columns} />;
};
