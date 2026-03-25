import * as React from "react";
import "flag-icons/css/flag-icons.min.css";

import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "@/components/ui/widget";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function SportsWidget() {
  return (
    <Widget design="mumbai">
      <WidgetHeader>
        <WidgetTitle className="text-muted-foreground flex items-center gap-1 text-sm font-normal">
          <div className="bg-destructive size-2 rounded-full animate-pulse" />
          Live
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="me-auto flex flex-col items-center gap-2">
          <span className="fi fi-tr fis text-4xl rounded-full overflow-hidden" />
          <Label className="text-3xl">2</Label>
        </div>
        <Badge className="animate-pulse text-sm" variant="secondary">
          61'
        </Badge>
        <div className="ms-auto flex flex-col items-center gap-2">
          <span className="fi fi-es fis text-4xl rounded-full overflow-hidden" />
          <Label className="text-3xl">2</Label>
        </div>
      </WidgetContent>
      <WidgetFooter className="justify-center">
        <Label className="text-muted-foreground">2026 World Cup</Label>
      </WidgetFooter>
    </Widget>
  );
}
