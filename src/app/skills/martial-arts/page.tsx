import MartialArts from "@/app/components/martial-arts";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Empty (){
    return (
        <div id="wing-chun">
            <MartialArts includeBtns={false}/>
            <Table>
                <TableCaption>What I should doing to mastering my Wing Chun</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Movement's name</TableHead>
                        <TableHead>Chinese's name</TableHead>
                        <TableHead>Is Learned</TableHead>
                        <TableHead className="text-right">Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Sil Lim Tau</TableCell>
                        <TableCell>小念頭</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell className="text-right">empty-hand</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Chum Kiu</TableCell>
                        <TableCell>尋桥</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell className="text-right">empty-hand</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Biu Tse</TableCell>
                        <TableCell>标指</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell className="text-right">empty-hand</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">The Wooden Dummy</TableCell>
                        <TableCell>木人樁</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell className="text-right">Weapon Forms</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">The Luk Dim Boon Kwan</TableCell>
                        <TableCell>八斩刀</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell className="text-right">Weapon Forms</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Baat Cham Do</TableCell>
                        <TableCell>六点半杆</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell className="text-right">Weapon Forms</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}