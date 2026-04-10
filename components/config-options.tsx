import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // допустим у тебя есть компонент Input
import { FaDiscord, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaTelegram, FaSignalMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiPatreon, SiCanva, SiProtonvpn, SiModrinth } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { 
  ViberIcon, NNMClubIcon, KinozalIcon, 
  CopilotIcon, AnimeGoIcon, PornhubIcon, 
  JutsuIcon, YummyAnimeIcon, XVideosIcon,
  PornoLabIcon, FicBookIcon, RuTrackerIcon
} from "@/components/icons/custom-icons";
import servicesConfig from "@/data/services-config.json";

// Icon mapping для динамического импорта
const iconMap = {
  // React Icons FA
  "FaDiscord": FaDiscord,
  "FaYoutube": FaYoutube,
  "FaTwitter": FaTwitter,
  "FaFacebook": FaFacebook,
  "FaSignalMessenger": FaSignalMessenger,
  // React Icons FA6
  "FaTelegram": FaTelegram,
  // React Icons IO
  "IoLogoWhatsapp": IoLogoWhatsapp,
  // React Icons RI
  "RiInstagramFill": RiInstagramFill,
  "RiNetflixFill": RiNetflixFill,
  // React Icons SI
  "SiPatreon": SiPatreon,
  "SiCanva": SiCanva,
  "SiProtonvpn": SiProtonvpn,
  "SiModrinth": SiModrinth,
  // Custom Icons
  "ViberIcon": ViberIcon,
  "NNMClubIcon": NNMClubIcon,
  "KinozalIcon": KinozalIcon,
  "CopilotIcon": CopilotIcon,
  "AnimeGoIcon": AnimeGoIcon,
  "PornhubIcon": PornhubIcon,
  "JutsuIcon": JutsuIcon,
  "YummyAnimeIcon": YummyAnimeIcon,
  "XVideosIcon": XVideosIcon,
  "PornoLabIcon": PornoLabIcon,
  "FicBookIcon": FicBookIcon,
  "RuTrackerIcon": RuTrackerIcon,
  // Default fallback
  "TbBoxMultipleFilled": TbBoxMultipleFilled
};


interface ConfigOptionsProps {
  selectedServices: string[]
  onServiceToggle: (service: string) => void
  siteMode: "all" | "specific"
  onSiteModeChange: (mode: "all" | "specific") => void
  deviceType: "computer" | "phone" | "awg15"
  onDeviceTypeChange: (type: "computer" | "phone" | "awg15") => void
  endPoint: "default" | "default2" | "input"
  onEndPointChange: (point: "default" | "default2" | "input") => void
  customEndpoint: string
  onCustomEndpointChange: (endpoint: string) => void
}

const getEndpointDisplayValue = (endPointValue: string) => {
  switch (endPointValue) {
    case "default":
      return "162.159.195.1:500";
    case "default2":
      return "engage.cloudflareclient.com:2408";
    case "input":
      return "";
    default:
      return "";
  }
};

export function ConfigOptions({
  selectedServices,
  onServiceToggle,
  siteMode,
  onSiteModeChange,
  deviceType,
  onDeviceTypeChange,
  endPoint,
  onEndPointChange,
  customEndpoint,
  onCustomEndpointChange,
}: ConfigOptionsProps) {
  const handleEndPointChange = (value: "default" | "default2" | "input") => {
    onEndPointChange(value);
    if (value === "input") {
      onCustomEndpointChange("");
    }
  };

  const handleCustomEndpointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (endPoint === "input") {
      onCustomEndpointChange(e.target.value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">

        {/* Режим сайта */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium pb-[5px]">Тип конфигурации</span>
          <Select value={siteMode} onValueChange={onSiteModeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все сайты</SelectItem>
              <SelectItem value="specific">Определенные сайты</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Выбор сервисов */}
        {siteMode === "specific" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {servicesConfig.services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || TbBoxMultipleFilled;

              return (
                <Button
                  key={service.key}
                  variant={selectedServices.includes(service.key) ? "default" : "outline"}
                  onClick={() => onServiceToggle(service.key)}
                  className="justify-start gap-2"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {service.name}
                  {service.type === "new" && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                  )}
                </Button>
              );
            })}
          </div>
        )}

        {/* Настройки соединения */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium pb-[5px]">Настройки соединения</span>
          <Select value={deviceType} onValueChange={onDeviceTypeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="awg15">AmneziaWG 1.5</SelectItem>
            </SelectContent>
          </Select>

        {/* Endpoint */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium pb-[5px]">Конечная точка</span>
          <Select value={endPoint} onValueChange={handleEndPointChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default2">Альтернативный</SelectItem>
              </SelectContent>
          </Select>
       </div>
    </div>
  );
}
