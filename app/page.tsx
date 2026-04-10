"use client"

import Image from "next/image"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Info,
} from "lucide-react"
import { RiTelegram2Line, RiGithubLine, RiRobot2Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { WarpGenerator } from "@/components/warp-generator"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [showNewFormatsAlert, setShowNewFormatsAlert] = useState(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full">
        {/* Уведомление о новых форматах */}
        {showNewFormatsAlert && (
          <Alert className="alert mb-6 break-words">
            <AlertTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              Новые форматы конфигураций
              <Badge variant="secondary" className="ml-2">Новое</Badge>
            </AlertTitle>

            <AlertDescription className="break-words mt-3">
              Добавлена поддержка новых форматов: <strong>Throne</strong>, <strong>Clash</strong>, <strong>NekoRay/Exclave</strong>, <strong>Husi</strong>, <strong>Karing/Hiddify</strong>. 
              Выберите нужный формат в настройках конфигурации.
            </AlertDescription>
            
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setShowNewFormatsAlert(false)}
            >
              Скрыть уведомление
            </Button>
          </Alert>
        )}
        <div className="flex flex-col items-center justify-center gap-6 w-[300px]">
          <Image src="/logo.svg" alt="Логотип" width={300} height={300}/>
          <WarpGenerator/>
        </div>
      </main>
    </>
  )
}
