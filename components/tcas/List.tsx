import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactPropTypes } from "react";
import  useAircraftStore  from "./store/aircraftStore";


export default function List() {
  let flights = useAircraftStore((state) => state.aircraft)
  return (
    flights.map((aircraft, index) => {
      return (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>{aircraft.callsign}</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Aircraft Type</TableCell>
                    <TableCell className="text-right">
                      {aircraft.aircraftType}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Origin</TableCell>
                    <TableCell className="text-right">
                      {aircraft.origin}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Destination</TableCell>
                    <TableCell className="text-right">
                      {aircraft.destination}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Speed</TableCell>
                    <TableCell className="text-right">
                      {aircraft.speed}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Altitude</TableCell>
                    <TableCell className="text-right">
                      {aircraft.altitude}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Heading</TableCell>
                    <TableCell className="text-right">
                      {aircraft.heading}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    })

  );
}
