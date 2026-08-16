import React, { useState } from 'react';
import {
  ChevronDown,
  Monitor,
  Cpu,
  Zap,
  CheckCircle,
  ArrowLeft,
  PlugZap2Icon,
  ComputerIcon,
  Network,
  CpuIcon,
  GlassesIcon,
  Earth,
  EarthLockIcon,
  Computer,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import qm22a from '/qm22a.png';
import qm33a from '/qm33a.png';
import feseries from '/feseries.png';
import androidsoc from '/android soc.png';
import android32 from '/android32.png';
import fpseries from '/fpseries.png';
import flseries from '/flseries.png';
import srseries from '/srseries.png';
import bm23 from '/bm23.png';
import vwseries from '/vwseries.png';
import brightness from '/brightness.png';
import ac from '/ac.png';
import flatdisplay from '/flat display.png';
import oledkiosk from '/oledkiosk.png';
import ComparisonTable from '../components/ComparisonTable';
interface ProductVersion {
  name: string;
  screenSize?: string; // Optional for BTQ/BTX/BTY/BYB as it's not a traditional screen size
  resolution: string; // For BYB, this will be Pixel Per Panel (WxH)
  brightness: string;
  contrast: string;
  viewingAngle: string;
  responseTime?: string; // Optional for BTQ/BTX/BTY/BYB
  colorGamut?: string; // Optional for BTQ/BTX/BTY/BYB
  features: string[];
  applications: string[];
  specifications: {
    [key: string]: string;
  };
}

interface Product {
  detailedDescription: import('node_modules/@types/react/jsx-runtime').JSX.Element;
  id: string;
  name: string;
  category: string;
  description: string;
  partnerDescription?: string;
  versions: ProductVersion[];
  icon: React.ComponentType<any>;
  color: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  products: Product[];
  color: string;
}

const ProductsPage: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // BOE BKY-A Product Versions based on the specifications
  const bkyAVersions: ProductVersion[] = [
    {
      name: 'BKY-A 32"',
      screenSize: '32 inches',
      resolution: '3840 × 2160 (4K UHD)',
      brightness: '350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '72% NTSC',
      features: [
        '4K Ultra HD Resolution',
        'IPS Panel Technology',
        'Wide Color Gamut',
        'Low Blue Light',
        'Flicker-Free Technology',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Professional Design',
        'Content Creation',
        'Office Applications',
        'Digital Signage',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.18465mm',
        'Display Colors': '1.07B (8-bit + FRC)',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        DisplayPort: '1 port (DP 1.2)',
        USB: '2 × USB 3.0',
        'Power Consumption': '65W (typical)',
        Dimensions: '728.5 × 434.4 × 59.9mm',
        Weight: '6.8kg',
      },
    },
    {
      name: 'BKY-A 27"',
      screenSize: '27 inches',
      resolution: '2560 × 1440 (QHD)',
      brightness: '300 cd/m²',
      contrast: '1000:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '99% sRGB',
      features: [
        'QHD Resolution',
        'IPS Panel Technology',
        'sRGB Color Accuracy',
        'Low Blue Light',
        'Flicker-Free Technology',
        'Ergonomic Stand',
      ],
      applications: [
        'Professional Work',
        'Gaming',
        'Multimedia',
        'Programming',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2331mm',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '75Hz',
        HDMI: '2 ports (HDMI 2.0)',
        DisplayPort: '1 port (DP 1.2)',
        USB: '4 × USB 3.0 Hub',
        'Power Consumption': '45W (typical)',
        Dimensions: '614.3 × 367.1 × 52.8mm',
        Weight: '5.2kg',
      },
    },
    {
      name: 'BKY-A 24"',
      screenSize: '24 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '250 cd/m²',
      contrast: '1000:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '72% NTSC',
      features: [
        'Full HD Resolution',
        'IPS Panel Technology',
        'Wide Viewing Angles',
        'Low Blue Light',
        'Flicker-Free Technology',
        'VESA Mount Compatible',
      ],
      applications: [
        'Office Work',
        'Home Use',
        'Education',
        'Basic Design Work',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '60Hz',
        HDMI: '1 port (HDMI 1.4)',
        VGA: '1 port',
        DVI: '1 port (DVI-D)',
        'Power Consumption': '35W (typical)',
        Dimensions: '540.7 × 323.4 × 45.2mm',
        Weight: '3.8kg',
      },
    },
  ];

  // BOE BTQ Product Versions based on the provided PDFs
  const btqVersions: ProductVersion[] = [
    {
      name: 'BTQ015S',
      resolution: '208*104',
      brightness: '≥ 500 cd/m²',
      contrast: 'High contrast', // From product features
      viewingAngle: 'Horizontal ≥ 150°, Vertical ≥ 130°',
      features: [
        'High-quality LED, high brightness utilization',
        'High contrast',
        'Lightweight and easy to disassemble',
        'Single lamp maintenance, Low cost',
      ],
      applications: [
        'Indoor LED Displays',
        'Fine Pitch Applications',
        'Commercial Displays',
        'Control Rooms',
      ],
      specifications: {
        'Pitch(mm)': '1.53',
        'LED Model': 'SMD1212',
        'LED Type': 'Copper wire',
        Resolution: '208*104',
        'Size ± Tolerance (mm × mm × mm)':
          '319.9 ± 0.1 × 159.9 ± 0.1 × 15 ± 0.2',
        'Weight ± Tolerance (kg)': '0.531 ± 0.05',
        'Flatness (mm)': '＜ 0.2',
        'Pixel density(dot/㎡)': '422500',
        'Brightness(cd/m2)': '≥ 500',
        'Color temperature(k)': '3000 ～ 15000 (Adjustable)',
        'Horizontal Angle of view(°)': '≥ 150',
        'Vertical Angle of view(°)': '≥ 130',
        'Visual distance': '≥ 1.5',
        'Max power consumption of a mode': '≤ 20W',
        'Average power consumption of a model': '≤ 130W/㎡',
        'Maximum active power consumption': '≤ 390W/㎡',
        'Working voltage(V)': '5',
        'Signal input interface type': 'HUB75',
        'Scanning method': '52',
        'frame frequency(Hz)': '50/60',
        'refresh rate(Hz)': '3840',
        'Drive mode': 'Constant current driver',
        'Gray(bit)': '13',
        'Continuous working hours':
          '≥ 7*24hrs (support continuous uninterrupted display)',
        'Average time without failures': '≥ 5000 hrs',
        'Discrete runaway point': '≤ 0.0001, 0 (at the factory)',
        'Continuous runaway point': '0',
        'Blind spot rate': '≤ 0.0001, 0 (at the factory)',
        'LED Lifetime, Typical(hrs)': '30000',
        'Operating temperature(℃)': '-20 - +40',
        'Storage temperature(℃)': '-20 - +60',
        'Operating humidity(RH)': '10% - 60% (No condensation)',
        'Storage humidity(RH)': '10% - 65% (No condensation)',
        'Ingress Protection': 'IP30',
      },
    },
    {
      name: 'BTQ018S',
      resolution: '172*86',
      brightness: '≥ 500 cd/m²',
      contrast: 'High contrast',
      viewingAngle: 'Horizontal ≥ 150°, Vertical ≥ 130°',
      features: [
        'High-quality LED, high brightness utilization',
        'High contrast',
        'Lightweight and easy to disassemble',
        'Single lamp maintenance, Low cost',
      ],
      applications: [
        'Indoor LED Displays',
        'Fine Pitch Applications',
        'Commercial Displays',
        'Control Rooms',
      ],
      specifications: {
        'Pitch(mm)': '1.86',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        Resolution: '172*86',
        'Size ± Tolerance (mm × mm × mm)':
          '319.9 ± 0.1 × 159.9 ± 0.1 × 14.6 ± 0.2',
        'Weight ± Tolerance (kg)': '0.463 ± 0.05',
        'Flatness (mm)': '＜ 0.2',
        'Pixel density(dot/㎡)': '288906',
        'Brightness(cd/m2)': '≥ 500',
        'Color temperature(k)': '3000 ～ 15000 (Adjustable)',
        'Horizontal Angle of view(°)': '≥ 150',
        'Vertical Angle of view(°)': '≥ 130',
        'Visual distance': '≥ 1.8',
        'Max power consumption of a mode': '≤ 20W',
        'Average power consumption of a model': '≤ 130W/㎡',
        'Maximum active power consumption': '≤ 390W/㎡',
        'Working voltage(V)': '5',
        'Signal input interface type': 'HUB75',
        'Scanning method': '43',
        'frame frequency(Hz)': '50/60',
        'refresh rate(Hz)': '3840',
        'Drive mode': 'Constant current driver',
        'Gray(bit)': '13',
        'Continuous working hours':
          '≥ 7*24hrs (support continuous uninterrupted display)',
        'Average time without failures': '≥ 5000 hrs',
        'Discrete runaway point': '≤ 0.0001, 0 (at the factory)',
        'Continuous runaway point': '0',
        'Blind spot rate': '≤ 0.0001, 0 (at the factory)',
        'LED Lifetime, Typical(hrs)': '30000',
        'Operating temperature(℃)': '-20 - +40',
        'Storage temperature(℃)': '-20 - +60',
        'Operating humidity(RH)': '10% - 60% (No condensation)',
        'Storage humidity(RH)': '10% - 65% (No condensation)',
        'Ingress Protection': 'IP30',
      },
    },
    {
      name: 'BTQ020S',
      resolution: '160*80',
      brightness: '≥ 500 cd/m²',
      contrast: 'High contrast',
      viewingAngle: 'Horizontal ≥ 150°, Vertical ≥ 130°',
      features: [
        'High-quality LED, high brightness utilization',
        'High contrast',
        'Lightweight and easy to disassemble',
        'Single lamp maintenance, Low cost',
      ],
      applications: [
        'Indoor LED Displays',
        'Fine Pitch Applications',
        'Commercial Displays',
        'Control Rooms',
      ],
      specifications: {
        'Pitch(mm)': '2.0',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        Resolution: '160*80',
        'Size ± Tolerance (mm × mm × mm)':
          '319.9 ± 0.1 × 159.9 ± 0.1 × 14.6 ± 0.2',
        'Weight ± Tolerance (kg)': '0.465 ± 0.05',
        'Flatness (mm)': '≤ 0.2',
        'Pixel density(dot/㎡)': '250000',
        'Brightness(cd/m2)': '≥ 500',
        'Color temperature(k)': '3000 ～ 15000 (Adjustable)',
        'Horizontal Angle of view(°)': '≥ 150',
        'Vertical Angle of view(°)': '≥ 130',
        'Visual distance': '≥ 2',
        'Max power consumption of a mode': '≤ 20W',
        'Average power consumption of a model': '≤ 130W/㎡',
        'Maximum active power consumption': '≤ 390W/㎡',
        'Working voltage(V)': '5',
        'Signal input interface type': 'HUB75',
        'Scanning method': '40',
        'frame frequency(Hz)': '50/60',
        'refresh rate(Hz)': '3840',
        'Drive mode': 'Constant current driver',
        'Gray(bit)': '13',
        'Continuous working hours':
          '≥ 7*24hrs (support continuous uninterrupted display)',
        'Average time without failures': '≥ 5000 hrs',
        'Discrete runaway point': '≤ 0.0001, 0 (at the factory)',
        'Continuous runaway point': '0',
        'Blind spot rate': '≤ 0.0001, 0 (at the factory)',
        'LED Lifetime, Typical(hrs)': '30000',
        'Operating temperature(℃)': '-20 - 40',
        'Storage temperature(℃)': '-20 - 60',
        'Operating humidity(RH)': '10% - 60% (No condensation)',
        'Storage humidity(RH)': '10% - 65% (No condensation)',
        'Ingress Protection': 'IP30',
      },
    },
    {
      name: 'BTQ025S',
      resolution: '128*64',
      brightness: '≥ 500 cd/m²',
      contrast: 'High contrast',
      viewingAngle: 'Horizontal ≥ 150°, Vertical ≥ 130°',
      features: [
        'High-quality LED, high brightness utilization',
        'High contrast',
        'Lightweight and easy to disassemble',
        'Single lamp maintenance, Low cost',
      ],
      applications: [
        'Indoor LED Displays',
        'Fine Pitch Applications',
        'Commercial Displays',
        'Control Rooms',
      ],
      specifications: {
        'Pitch(mm)': '2.5',
        'LED Model': 'SMD2020',
        'LED Type': 'Copper wire',
        Resolution: '128*64',
        'Size ± Tolerance (mm × mm × mm)':
          '319.9 ± 0.1 × 159.9 ± 0.1 × 14.2 ± 0.2',
        'Weight ± Tolerance (kg)': '0.42 ± 0.05',
        'Flatness (mm)': '＜ 0.2',
        'Pixel density(dot/㎡)': '160000',
        'Brightness(cd/m2)': '≥ 500',
        'Color temperature(k)': '3000 ～ 15000 (Adjustable)',
        'Horizontal Angle of view(°)': '≥ 150',
        'Vertical Angle of view(°)': '≥ 130',
        'Visual distance': '≥ 2.5',
        'Max power consumption of a mode': '≤ 20W',
        'Average power consumption of a model': '≤ 130W/㎡',
        'Maximum active power consumption': '≤ 390W/㎡',
        'Working voltage(V)': '5',
        'Signal input interface type': 'HUB75',
        'Scanning method': '64',
        'frame frequency(Hz)': '50/60',
        'refresh rate(Hz)': '3840',
        'Drive mode': 'Constant current driver',
        'Gray(bit)': '13',
        'Continuous working hours':
          '≥ 7*24hrs (support continuous uninterrupted display)',
        'Average time without failures': '≥ 5000 hrs',
        'Discrete runaway point': '≤ 0.0001, 0 (at the factory)',
        'Continuous runaway point': '0',
        'Blind spot rate': '≤ 0.0001, 0 (at the factory)',
        'LED Lifetime, Typical(hrs)': '30000',
        'Operating temperature(℃)': '-20 - +40',
        'Storage temperature(℃)': '-20 - +60',
        'Operating humidity(RH)': '10% - 60% (No condensation)',
        'Storage humidity(RH)': '10% - 65% (No condensation)',
        'Ingress Protection': 'IP30',
        Certification: 'ROHS (Meet China ROHS requirements)',
      },
    },
  ];

  // BOE BTX Product Versions based on the provided PDFs
  const btxVersions: ProductVersion[] = [
    {
      name: 'BTX-FL012A',
      resolution: '256*128',
      brightness: '450 nits',
      contrast: 'High contrast (implied by features)',
      viewingAngle: '150°/130°',
      features: [
        'Flexible PCB soft board, the bottom shell are made of superior silicone material',
        'Bending angle of the module is 120°~180°',
        'Module adopts high refresh high grayscale IC, more uniform heat dissipation',
        'Refresh frequency can reach 3840Hz',
        'Module adopts 18 pcs strong magnetic adsorption mounting with good flatness, also can be finely adjusted',
      ],
      applications: [
        'Indoor Flexible LED Displays',
        'Creative Installations',
        'Curved Displays',
        'Exhibition Booths',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.25',
        'LED Type': 'SMD1010',
        'Module Resolution(W × H)': '256*128',
        'Module Size(W × H × D)/(mm)': '320 * 160*7.5',
        'Pixel Density(dots/㎡)': '640000',
        'Module Weight(Kg)': '0.285 ± 0.05',
        'Module Flatness(mm)': '≤ 0.2',
        'Bending Arc(°)': '120~180',
        'Recommended Minimum Diameter for Soft Bending Module':
          '6 pieces for a full circle, bending not less than φ 611mm',
        'White Balance Brightness(nits)': '450',
        'Color Temperature(K)': '8000 - 9500 (Adjustable)',
        'Viewing Angle (Horizontal/Vertical)(°)': '150/130',
        'Refresh Frequency(Hz)': '3840',
        'Grayscale(bit)': '13',
        'Scanning Mode': '1/64',
        'AC Operating Voltage(V)': '5',
        'Signal Input Interface Type': 'HUB320',
        'Maximum Power per Module (W)': '22',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '1.25',
        'Storage Temperature(℃)/ Humidity (RH)': '-20℃ ~50℃ /10%~65%',
        'Working Temperature(℃)/ Humidity(RH)': '-10℃ ~40℃ /10%~60%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front /Rear maintenance',
        'Continuous Operating Time': '≥ 7X24hrs, support continuous display',
      },
    },
    {
      name: 'BTX-FL015A',
      resolution: '208*104',
      brightness: '600 nits',
      contrast: 'High contrast (implied by features)',
      viewingAngle: '150°/130°',
      features: [
        'Flexible PCB soft board, the bottom shell are made of superior silicone material',
        'Bending angle of the module is 120°~180°',
        'Module adopts high refresh high grayscale IC, more uniform heat dissipation',
        'Refresh frequency can reach 3840Hz',
        '18 pcs strong magnetic adsorption mounting with good flatness, also can be finely adjusted',
      ],
      applications: [
        'Indoor Flexible LED Displays',
        'Creative Installations',
        'Curved Displays',
        'Exhibition Booths',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.538',
        'LED Type': 'SMD1212',
        'Module Resolution(W × H)': '208*104',
        'Module Size(W × H × D)/(mm)': '320*160*7.5',
        'Pixel Density(dots/㎡)': '422500',
        'Module Weight(Kg)': '0.32 ± 0.05',
        'Module Flatness(mm)': '≤ 0.2',
        'Bending Arc(°)': '120~180',
        'Recommended Minimum Diameter for Soft Bending Module':
          '6 pieces for a full circle, bending not less than φ 611mm',
        'White Balance Brightness(nits)': '600',
        'Color Temperature(K)': '8000-9500 (Adjustable)',
        'Viewing Angle (Horizontal/Vertical)(°)': '150/130',
        'Refresh Frequency(Hz)': '3840',
        'Grayscale(bit)': '13',
        'Scanning Mode': '1/52',
        'AC Operating Voltage(V)': '5',
        'Signal Input Interface Type': 'HUB75',
        'Maximum Power per Module (W)': '25',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '1.5',
        'Storage Temperature(℃)/ Humidity (RH)': '-20℃ ~50℃ /10%~65%',
        'Working Temperature(℃)/ Humidity(RH)': '-10℃ ~40℃ /10%~60%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front /Rear maintenance',
        'Continuous Operating Time': '≥ 7X24hrs, support continuous display',
      },
    },
    {
      name: 'BTX-FL018A',
      resolution: '172*86',
      brightness: '600 nits',
      contrast: 'High contrast (implied by features)',
      viewingAngle: '150°/130°',
      features: [
        'Flexible PCB soft board, the bottom shell are made of superior silicone material',
        'Bending angle of the module is 120°~180°',
        'Module adopts high refresh high grayscale IC, more uniform heat dissipation',
        'Refresh frequency can reach 3840Hz',
        '18 pcs strong magnetic adsorption mounting with good flatness, also can be finely adjusted',
      ],
      applications: [
        'Indoor Flexible LED Displays',
        'Creative Installations',
        'Curved Displays',
        'Exhibition Booths',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.86',
        'LED Type': 'SMD1515',
        'Module Resolution(W × H)': '172*86',
        'Module Size(W × H × D)/(mm)': '320*160*7.5',
        'Pixel Density(dots/㎡)': '288906',
        'Module Weight(Kg)': '0.32 ± 0.05',
        'Module Flatness(mm)': '≤ 0.2',
        'Bending Arc(°)': '120~180',
        'Recommended Minimum Diameter for Soft Bending Module':
          '6 pieces for a full circle, bending not less than φ 611mm',
        'White Balance Brightness(nits)': '600',
        'Color Temperature(K)': '8000 - 9500 (Adjustable)',
        'Viewing Angle (Horizontal/Vertical)(°)': '150/130',
        'Refresh Frequency(Hz)': '3840',
        'Grayscale(bit)': '≥ 13',
        'Scanning Mode': '1/43',
        'AC Operating Voltage(V)': '5',
        'Signal Input Interface Type': 'HUB75',
        'Maximum Power per Module (W)': '25',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '1.8',
        'Storage Temperature(℃)/ Humidity (RH)': '-20℃ ~50℃ /10%~65%',
        'Working Temperature(℃)/ Humidity(RH)': '-10℃ ~40℃ /10%~60%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front /Rear maintenance',
        'Continuous Operating Time': '≥ 7X24hrs, support continuous display',
      },
    },
    {
      name: 'BTX-FL020A',
      resolution: '160*80',
      brightness: '600 nits',
      contrast: 'High contrast (implied by features)',
      viewingAngle: '150°/130°',
      features: [
        'Flexible PCB soft board, the bottom shell are made of superior silicone material',
        'Bending angle of the module is 120°~180°',
        'Module adopts high refresh high grayscale IC, more uniform heat dissipation',
        'Refresh frequency can reach 3840Hz',
        '18 pcs strong magnetic adsorption mounting with good flatness, also can be finely adjusted',
      ],
      applications: [
        'Indoor Flexible LED Displays',
        'Creative Installations',
        'Curved Displays',
        'Exhibition Booths',
      ],
      specifications: {
        'Pixel Pitch(mm)': '2.0',
        'LED Type': 'SMD1515',
        'Module Resolution(W × H)': '160*80',
        'Module Size(W × H × D)/(mm)': '320*160*7.5',
        'Pixel Density(dots/㎡)': '250000',
        'Module Weight(Kg)': '0.26 ± 0.05',
        'Module Flatness(mm)': '≤ 0.2',
        'Bending Arc(°)': '120~180',
        'Recommended Minimum Diameter for Soft Bending Module':
          '6 pieces for a full circle, bending not less than φ 611mm',
        'White Balance Brightness(nits)': '600',
        'Color Temperature(K)': '7500 - 10000 (Adjustable)',
        'Viewing Angle (Horizontal/Vertical)(°)': '150/130',
        'Refresh Frequency(Hz)': '3840',
        'Grayscale(bit)': '≥ 13',
        'Scanning Mode': '1/40',
        'AC Operating Voltage(V)': '5',
        'Signal Input Interface Type': 'HUB75',
        'Maximum Power per Module (W)': '22.5',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '2',
        'Storage Temperature(℃)/ Humidity (RH)': '-20℃ ~50℃ /10%~65%',
        'Working Temperature(℃)/ Humidity(RH)': '-10℃ ~40℃ /10%~60%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front /Rear maintenance',
        'Continuous Operating Time': '≥ 7X24hrs, support continuous display',
      },
    },
    {
      name: 'BTX-FL025A',
      resolution: '128*64',
      brightness: '650 nits',
      contrast: 'High contrast (implied by features)',
      viewingAngle: '150°/130°',
      features: [
        'Flexible PCB soft board, the bottom shell are made of superior silicone material',
        'Bending angle of the module is 120°~180°',
        'Module adopts high refresh high grayscale IC, more uniform heat dissipation',
        'Refresh frequency can reach 3840Hz',
        '18 pcs strong magnetic adsorption mounting with good flatness, also can be finely adjusted',
      ],
      applications: [
        'Indoor Flexible LED Displays',
        'Creative Installations',
        'Curved Displays',
        'Exhibition Booths',
      ],
      specifications: {
        'Pixel Pitch(mm)': '2.5',
        'LED Type': 'SMD2121',
        'Module Resolution(W × H)': '128*64',
        'Module Size(W × H × D)/(mm)': '320*160*7.5',
        'Pixel Density(dots/㎡)': '160000',
        'Module Weight(Kg)': '0.26 ± 0.05',
        'Module Flatness(mm)': '≤ 0.2',
        'Bending Arc(°)': '120~180',
        'Recommended Minimum Diameter for Soft Bending Module':
          '6 pieces for a full circle, bending not less than φ 611mm',
        'White Balance Brightness(nits)': '650',
        'Color Temperature(K)': '7500-10000 (Adjustable)',
        'Viewing Angle (Horizontal/Vertical)(°)': '150/130',
        'Refresh Frequency(Hz)': '3840',
        'Grayscale(bit)': '≥ 13',
        'Scanning Mode': '1/32',
        'AC Operating Voltage(V)': '5',
        'Signal Input Interface Type': 'HUB75',
        'Maximum Power per Module (W)': '21.5',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '2.5',
        'Storage Temperature(℃)/ Humidity (RH)': '-20℃ ~50℃ /10%~65%',
        'Working Temperature(℃)/ Humidity(RH)': '-10℃ ~40℃ /10%~60%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front /Rear maintenance',
        'Continuous Operating Time': '≥ 7X24hrs, support continuous display',
      },
    },
  ];

  // BOE BTY-B Product Versions based on the provided PDFs
  const btyBVersions: ProductVersion[] = [
    {
      name: 'BTY019B11',
      resolution: '128*128',
      brightness: '≥ 1000',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'Horizontal ≥ 160°, Vertical ≥ 140°',
      features: [
        'Lightweight, ultra-thin and high-precision die-casting aluminum panel',
        'Standardized cabinets compatible with a wide range of pitches',
        'Fast installation, and the modules are equipped with a variety of features such as anti-dust accumulation and magnetic fixation.',
        'Widely used in indoor concerts, hotel stages and so on.',
      ],
      applications: [
        'Indoor Concerts',
        'Hotel Stages',
        'Event Venues',
        'Exhibition Halls',
      ],
      specifications: {
        'Pitch(mm)': '1.953',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        'Module Resolution': '128*128',
        Scanning: '1 / 16',
        'Module Size (mm)': '249.90 ± 0.1(H)*249.90 ± 0.1(V) *6.6 ± 0.2(D)',
        'Module Weight (kg)': '0.6',
        'Module Flatness (mm)': '≤ 0.2',
        'Pixel Density (dot/m²)': '262144',
        'Module Voltage (V)': 'DC 4.2V',
        'Cabinet Composition': '2*2',
        'Cabinet Resolution': '256*256',
        'Cabinet Dimension (mm)':
          '500+0/-0.15(H)*500+0/-0.15(V) * 75.6 ± 0.2(D)',
        'Cabinet Weight (kg)': '7.71',
        'Maintenance Mode': 'Front/Rear Maintenance',
        'Cabinet Material': 'Die-cast aluminum',
        'Cabinet Flatness (mm)': '≤ 0.3',
        'Grayscale (Bit)': '14Bit',
        'Max power consumption (W/m²)': '463',
        'Average power consumption(W/m²)': '157',
        'Panel Voltage (V)': 'AC200-240V, 50/60Hz',
        'Color temperature': '3000K ～ 15000K adjustable',
        'Viewing angle horizontal': '≥ 160°',
        'Viewing angle vertical': '≥ 140°',
        'White balance brightness': '≥ 1000',
        'View distance (m)': '≥ 5',
        'Continuous operation time': '≥ 7*24hrs, Support uninterrupted display',
        'Average trouble-free working time': '≥ 10000 hrs',
        'Discrete runaway point': 'Preset at 0, 1000hrs ＜ 3PPM',
        'Continuous runaway point': 'Preset at 0',
        'Blind spot rate': 'Preset at 0, 1000hour ＜ 3PPM',
        'Screen temperature increase (operating status)': '≤ 50°',
        'Typical life value(hrs)': '100000',
        'Operating temperature(℃)': '-20~+45',
        'Storage temperature(℃)': '-20~+60',
        'Operating humidity(RH)': '10%~65%PH',
        'Storage humidity(RH)': '10%~65%PH',
        'Protection grade': 'IP30',
        Certifications: 'CCC, Energy Saving Certification, CE, CB, UL, FCC',
      },
    },
    {
      name: 'BTY026B11',
      resolution: '96*96',
      brightness: '≥ 1000',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'Horizontal ≥ 160°, Vertical ≥ 140°',
      features: [
        'Lightweight, ultra-thin and high-precision die-casting aluminum panel',
        'Standardized cabinets compatible with a wide range of pitches',
        'Fast installation, and the modules are equipped with a variety of features such as anti-dust accumulation and magnetic fixation.',
        'Widely used in indoor concerts, hotel stages and so on.',
      ],
      applications: [
        'Indoor Concerts',
        'Hotel Stages',
        'Event Venues',
        'Exhibition Halls',
      ],
      specifications: {
        'Pitch(mm)': '2.604',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        'Module Resolution': '96*96',
        Scanning: '1 / 24',
        'Module Size (mm)': '249.90 ± 0.1(H)*249.90 ± 0.1(V) *6.6 ± 0.2(D)',
        'Module Weight (kg)': '0.6',
        'Module Flatness (mm)': '≤ 0.2',
        'Pixel Density (dot/m²)': '147456',
        'Module Voltage (V)': 'DC 4.2V',
        'Cabinet Composition': '2*2',
        'Cabinet Resolution': '192*192',
        'Cabinet Dimension (mm)': '500+0/-0.15(H)*500+0/-0.15(V) * 69 ± 0.2(D)',
        'Cabinet Weight (kg)': '7.71',
        'Maintenance Mode': 'Front/Rear Maintenance',
        'Cabinet Material': 'Die-cast aluminum',
        'Cabinet Flatness (mm)': '≤ 0.3',
        'Grayscale (Bit)': '14Bit',
        'Max power consumption (W/m²)': '463',
        'Average power consumption(W/m²)': '157',
        'Panel Voltage (V)': 'AC100-240V, 50/60Hz',
        'Color temperature': '3000K ～ 15000K adjustable',
        'Viewing angle horizontal': '≥ 160°',
        'Viewing angle vertical': '≥ 140°',
        'White balance brightness': '≥ 1000',
        'View distance (m)': '≥ 5',
        'Continuous operation time': '≥ 7*24hrs, Support uninterrupted display',
        'Average trouble-free working time': '≥ 10000 hrs',
        'Discrete runaway point': 'Preset at 0, 1000hrs ＜ 3PPM',
        'Continuous runaway point': 'Preset at 0',
        'Blind spot rate': 'Preset at 0, 1000hour ＜ 3PPM',
        'Screen temperature increase (operating status)': '≤ 50°',
        'Typical life value(hrs)': '100000',
        'Operating temperature(℃)': '-20~+45',
        'Storage temperature(℃)': '-20~+60',
        'Operating humidity(RH)': '10%~65%PH',
        'Storage humidity(RH)': '10%~65%PH',
        'Protection grade': 'IP30',
        Certifications: 'CCC, Energy Saving Certification, CE, CB, UL, FCC',
      },
    },
    {
      name: 'BTY029B11',
      resolution: '84*84',
      brightness: '≥ 1000',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'Horizontal ≥ 160°, Vertical ≥ 140°',
      features: [
        'Lightweight, ultra-thin and high-precision die-casting aluminum panel',
        'Standardized cabinets compatible with a wide range of pitches',
        'Fast installation, and the modules are equipped with a variety of features such as anti-dust accumulation and magnetic fixation.',
        'Widely used in indoor concerts, hotel stages and so on.',
      ],
      applications: [
        'Indoor Concerts',
        'Hotel Stages',
        'Event Venues',
        'Exhibition Halls',
      ],
      specifications: {
        'Pitch(mm)': '2.967',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        'Module Resolution': '84*84',
        Scanning: '1 / 21',
        'Module Size (mm)': '249.90 ± 0.1(H)*249.90 ± 0.1(V) *6.6 ± 0.2(D)',
        'Module Weight (kg)': '0.6',
        'Module Flatness (mm)': '≤ 0.2',
        'Pixel Density (dot/m²)': '112896',
        'Module Voltage (V)': 'DC 4.2V',
        'Cabinet Composition': '2*2',
        'Cabinet Resolution': '192*192',
        'Cabinet Dimension (mm)': '500+0/-0.15(H)*500+0/-0.15(V) * 69 ± 0.2(D)',
        'Cabinet Weight (kg)': '7.71',
        'Maintenance Mode': 'Front/Rear Maintenance',
        'Cabinet Material': 'Die-cast aluminum',
        'Cabinet Flatness (mm)': '≤ 0.3',
        'Grayscale (Bit)': '14Bit',
        'Max power consumption (W/m²)': '463',
        'Average power consumption(W/m²)': '157',
        'Panel Voltage (V)': 'AC200-240V, 50/60Hz',
        'Color temperature': '3000K ～ 15000K adjustable',
        'Viewing angle horizontal': '≥ 160°',
        'Viewing angle vertical': '≥ 140°',
        'White balance brightness': '≥ 1000',
        'View distance (m)': '≥ 5',
        'Continuous operation time': '≥ 7*24hrs, Support uninterrupted display',
        'Average trouble-free working time': '≥ 10000 hrs',
        'Discrete runaway point': 'Preset at 0, 1000hrs ＜ 3PPM',
        'Continuous runaway point': 'Preset at 0',
        'Blind spot rate': 'Preset at 0, 1000hour ＜ 3PPM',
        'Screen temperature increase (operating status)': '≤ 50°',
        'Typical life value(hrs)': '100000',
        'Operating temperature(℃)': '-20~+45',
        'Storage temperature(℃)': '-20~+60',
        'Operating humidity(RH)': '10%~65%PH',
        'Storage humidity(RH)': '10%~65%PH',
        'Protection grade': 'IP30',
        Certifications: 'CCC, Energy Saving Certification, CE, CB, UL, FCC',
      },
    },
    {
      name: 'BTY039B01',
      resolution: '128*64',
      brightness: '≥ 4500',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'Horizontal ≥ 160°, Vertical ≥ 110°',
      features: [
        'Lightweight, ultra-thin and high-precision die-casting aluminum panel',
        'Standardized cabinets compatible with a wide range of pitches',
        'Fast installation, and the modules are equipped with a variety of features such as anti-dust accumulation and magnetic fixation.',
        'Widely used in indoor concerts, hotel stages and so on.',
      ],
      applications: [
        'Indoor Concerts',
        'Hotel Stages',
        'Event Venues',
        'Exhibition Halls',
        'Outdoor Events (due to higher brightness)',
      ],
      specifications: {
        'Pitch(mm)': '3.906',
        'LED Model': 'SMD1515',
        'LED Type': 'Copper wire',
        'Module Resolution': '128 * 64',
        Scanning: '1 / 16',
        'Module Size (mm)': '499.90 ± 0.1(H)*249.90 ± 0.1(V) *5.8 ± 0.2(D)',
        'Module Weight (kg)': '1.36',
        'Module Flatness (mm)': '≤ 0.2',
        'Pixel Density (dot/m²)': '65536',
        'Module Voltage (V)': 'DC 4.5V',
        'Cabinet Composition': '1*2',
        'Cabinet Resolution': '128*128',
        'Cabinet Dimension (mm)':
          '500+0/-0.15(H)*500+0/-0.15(V) * 78.8 ± 0.2(D)',
        'Cabinet Weight (kg)': '8.14',
        'Maintenance Mode': 'Front/Rear Maintenance',
        'Cabinet Material': 'Die-cast aluminum',
        'Cabinet Flatness (mm)': '≤ 0.3',
        'Grayscale (Bit)': '14Bit',
        'Max power consumption': '780',
        'Average power consumption(W/m²)': '270',
        'Panel Voltage (V)': 'AC100-240V, 50/60Hz',
        'Color temperature': '3000K ～ 15000K adjustable',
        'Viewing angle horizontal': '≥ 160°',
        'Viewing angle vertical': '≥ 110°',
        'White balance brightness': '≥ 4500',
        'View distance (m)': '≥ 5',
        'Continuous operation time': '≥ 7*24hrs, Support uninterrupted display',
        'Average trouble-free working time': '≥ 10000 hrs',
        'Discrete runaway point': 'Preset at 0, 1000hrs ＜ 3PPM',
        'Continuous runaway point': 'Preset at 0',
        'Blind spot rate': 'Preset at 0, 1000hour ＜ 3PPM',
        'Screen temperature increase (operating status)': '≤ 50°',
        'Typical life value(hrs)': '100000',
        'Operating temperature(℃)': '-20~+45',
        'Storage temperature(℃)': '-20~+60',
        'Operating humidity(RH)': '10%~65%PH',
        'Storage humidity(RH)': '10%~65%PH',
        'Protection grade(front/back)': 'IP65 / IP54',
        Certifications: 'CCC, Energy Saving Certification, CE, CB, UL, FCC',
      },
    },
    {
      name: 'BTY048B01',
      resolution: '108*54',
      brightness: '≥ 4500',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'Horizontal ≥ 160°, Vertical ≥ 110°',
      features: [
        'Lightweight, ultra-thin and high-precision die-casting aluminum panel',
        'Standardized cabinets compatible with a wide range of pitches',
        'Fast installation, and the modules are equipped with a variety of features such as anti-dust accumulation and magnetic fixation.',
        'Widely used in indoor concerts, hotel stages and so on.',
      ],
      applications: [
        'Indoor Concerts',
        'Hotel Stages',
        'Event Venues',
        'Exhibition Halls',
        'Outdoor Events (due to higher brightness)',
      ],
      specifications: {
        'Pitch(mm)': '4.8',
        'LED Model': 'SMD1921',
        'LED Type': 'Copper wire',
        'Module Resolution': '108 * 54',
        Scanning: '1 / 13',
        'Module Size (mm)': '499.90 ± 0.1(H)*249.90 ± 0.1(V) *5.8 ± 0.2(D)',
        'Module Weight (kg)': '1.36',
        'Module Flatness (mm)': '≤ 0.5',
        'Pixel Density (dot/m²)': '46656',
        'Module Voltage (V)': 'DC 4.5V',
        'Cabinet Composition': '2*1',
        'Cabinet Resolution': '108*108',
        'Cabinet Dimension (mm)': '500+0/-0.15(H)*500+0/-0.15(V) * 73 ± 0.2(D)',
        'Cabinet Weight (kg)': '8.14',
        'Maintenance Mode': 'Front/Rear Maintenance',
        'Cabinet Material': 'Die-cast aluminum',
        'Cabinet Flatness (mm)': '≤ 0.3',
        'Grayscale (Bit)': '14Bit',
        'Max power consumption (W/m²)': '780',
        'Average power consumption(W/m²)': '270',
        'Panel Voltage (V)': 'AC100-240V, 50/60Hz',
        'Color temperature': '3000K ～ 15000K adjustable',
        'Viewing angle horizontal': '≥ 160°',
        'Viewing angle vertical': '≥ 110°',
        'White balance brightness': '≥ 4500',
        'View distance (m)': '≥ 5',
        'Continuous operation time': '≥ 7*24hrs, Support uninterrupted display',
        'Average trouble-free working time': '≥ 10000 hrs',
        'Discrete runaway point': 'Preset at 0, 1000hrs ＜ 3PPM',
        'Continuous runaway point': 'Preset at 0',
        'Blind spot rate': 'Preset at 0, 1000hour ＜ 3PPM',
        'Screen temperature increase (operating status)': '≤ 50°',
        'Typical life value(hrs)': '100000',
        'Operating temperature(℃)': '-20~+45',
        'Storage temperature(℃)': '-20~+60',
        'Operating humidity(RH)': '10%~65%PH',
        'Storage humidity(RH)': '10%~65%PH',
        'Protection grade(front/back)': 'IP65 / IP54',
        Certifications: 'CCC, Energy Saving Certification, CE, CB, UL, FCC',
      },
    },
  ];

  // BOE BYB Product Versions based on the provided PDFs
  const bybVersions: ProductVersion[] = [
    {
      name: 'BYB2.5',
      resolution: '256×256',
      brightness: '4500 nit',
      contrast: '4000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP65), prevents rainstorm, typhoon, salt fog',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1415',
        'Pixel Pitch (mm)': '2.5',
        'Panel Dimensions (WxHxD)/(mm)': '640×640×75',
        'Pixel Per Panel': '256×256',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×640',
        'Brightness (nit)': '4500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '14',
        'Contrast Ratio': '4000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '750/250',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢50',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP65/IP65',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Rear',
        'PSU & Others Maintenance': 'Rear',
        'Panel Installation Type': 'Fixed',
      },
    },
    {
      name: 'BYB3',
      resolution: '208×208',
      brightness: '4500 nit',
      contrast: '4000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP65), prevents rainstorm, typhoon, salt fog',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1415',
        'Pixel Pitch (mm)': '3.076',
        'Panel Dimensions (WxHxD)/(mm)': '640×640×75',
        'Pixel Per Panel': '208×208',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×640',
        'Brightness (nit)': '4500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '14',
        'Contrast Ratio': '4000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '750/250',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢50',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP65/IP65',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Rear',
        'PSU & Others Maintenance': 'Rear',
        'Panel Installation Type': 'Fixed',
      },
    },
    {
      name: 'BYB4',
      resolution: '120×240',
      brightness: '5000 nit',
      contrast: '5000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP65), prevents rainstorm, typhoon, salt fog',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1921',
        'Pixel Pitch (mm)': '4',
        'Panel Dimensions (WxHxD)/(mm)': '480×960×75',
        'Pixel Per Panel': '120×240',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '5000',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '14',
        'Contrast Ratio': '5000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '750/250',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢50',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP65/IP65',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Rear',
        'PSU & Others Maintenance': 'Rear',
        'Panel Installation Type': 'Fixed',
      },
    },
    {
      name: 'BYB5.9',
      resolution: '81×162',
      brightness: '5000 nit',
      contrast: '6000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP65), prevents rainstorm, typhoon, salt fog',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1921',
        'Pixel Pitch (mm)': '5.926',
        'Panel Dimensions (WxHxD)/(mm)': '480×960×75',
        'Pixel Per Panel': '81×162',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '5000',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '14',
        'Contrast Ratio': '6000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '750/250',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢50',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP65/IP65',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Rear',
        'PSU & Others Maintenance': 'Rear',
        'Panel Installation Type': 'Fixed',
      },
    },
    {
      name: 'BYB4 Plus',
      resolution: '216×216',
      brightness: '5500 nit',
      contrast: '5000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Dual voltage drive, energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1921',
        'Pixel Pitch (mm)': '4.44',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '216×216',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '5500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '5000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB6 Plus',
      resolution: '144×144',
      brightness: '7500 nit',
      contrast: '6500:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Dual voltage drive, energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '6.67',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '144×144',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '7500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '6500:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB8 Plus',
      resolution: '120×120',
      brightness: '7500 nit',
      contrast: '12000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Dual voltage drive, energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '8',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '120×120',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '7500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '12000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB10 Plus',
      resolution: '96×96',
      brightness: '7500 nit',
      contrast: '14000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Dual voltage drive, energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '10',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '96×96',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '7500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '14000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB4 Pro',
      resolution: '216×216',
      brightness: '7500 nit',
      contrast: '7500:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Dual voltage drive, energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD1921',
        'Pixel Pitch (mm)': '4.44',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '216×216',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '7500',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '7500:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB6 Pro',
      resolution: '144×144',
      brightness: '10000 nit',
      contrast: '9000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Brightness 10,000 nits, dual voltage drive, new benchmark for outdoor energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        '',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '6.67',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '144×144',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '10000',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '9000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB8 Pro',
      resolution: '120×120',
      brightness: '10000 nit',
      contrast: '19000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Brightness 10,000 nits, dual voltage drive, new benchmark for outdoor energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '8',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '120×120',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '10000',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '19000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
    {
      name: 'BYB10 Pro',
      resolution: '96×96',
      brightness: '10000 nit',
      contrast: '22000:1',
      viewingAngle: '160/140',
      features: [
        'Silver aluminum body, efficient heat dissipation',
        'Lightweight design (≤ 25KG/m²), low transportation and installation costs',
        'Good protective performance (IP66), prevents rainstorm, typhoon, salt fog',
        'Brightness 10,000 nits, dual voltage drive, new benchmark for outdoor energy-saving (30% compared to traditional products)',
        'No need for air conditioning, saving equipment costs and electricity bills',
        'Between panels connected by professional connectors, flexible and convenient installation and maintenance (front/rear)',
        'Can achieve various irregular shapes such as curve screen, glasses-free 3D, seamless right angle splicing',
      ],
      applications: [
        'Outdoor Landmark Display',
        'Street Furniture',
        'Digital Signage',
        'Sports Venues',
      ],
      specifications: {
        'LED Type': 'SMD2727',
        'Pixel Pitch (mm)': '10',
        'Panel Dimensions (WxHxD)/(mm)': '960×960×75',
        'Pixel Per Panel': '96×96',
        'Weight (kg/m²)': '25',
        'Panel Material': 'Aluminum',
        'Module Dimensions (WxH)/(mm)': '160×960',
        'Brightness (nit)': '10000',
        'Refresh Rate (Hz)': '≥3840',
        'Gray scale (bit)': '16',
        'Contrast Ratio': '22000:1',
        'Color Temperature (K)': '2000~9500',
        'Viewing Angle (H/V) (°)': '160/140',
        'AC Operating Voltage (V)': '220~240V @ 50/60Hz',
        'Power Consumption (Max./Avg.)(W/m²)': '550/180',
        'Storage Temperature (℃)': '﹣40~﹢60',
        'Operating Temperature (℃)': '﹣20~﹢60(-40℃ Optional)',
        'Storage Humidity (RH)': '10﹪~80﹪(No Condensation)',
        'Operating Humidity (RH)': '10﹪~90﹪(No Condensation)',
        'IP Rating (Front/Rear)': 'IP66/IP66',
        'LED Lifetime (H)': '100000',
        'Module Maintenance': 'Front/Rear',
        'PSU & Others Maintenance': 'Front/Rear',
        'Panel Installation Type': 'Fixed',
        Certificates: 'CB/CE/ETL/FCC/ROHS2.0/CCC',
      },
    },
  ];

  // BOE BYH Product Versions based on the provided PDFs
  const byhVersions: ProductVersion[] = [
    {
      name: 'BYH-009Q',
      resolution: '640 × 360',
      brightness: '600 cd/m² (Typical), 1000 cd/m² (Maximum)',
      contrast: '5000:1',
      viewingAngle: '165°/165°',
      features: [
        'Display every pixel on the module unit module, using full flip R, G, B chip package, each chip is fixed on the substrate',
        'Modular structure design, simple connection, light weight, more convenient installation and disassembly',
        'The display unit of the box body is a pre-maintenance magnetic suction structure, which is equipped with professional magnetic suction tools to complete installation and maintenance',
        'Driven by cross flow, excellent luminous uniformity, low power consumption',
        'High contrast',
        'Light weight, easy to install and disassemble',
      ],
      applications: [
        'Indoor Fine Pitch LED Displays',
        'Control Rooms',
        'Command Centers',
        'High-End Commercial Displays',
        'Conference Rooms',
      ],
      specifications: {
        'Product Model': 'C2-D0907 JC-0.9',
        'Pixel composition': '1R1G1B Full flip chips',
        'Pitch(mm)': '0.9375',
        'Resolution(W × H)': '640 × 360',
        'Size(mm)': '600 × 337.5 × 35 (W × H × D, Included display module)',
        'Weight(kg)': '4.6 (Included display module)',
        'Flatness(mm)': '0.15',
        'Brightness(cd/m²)':
          '600 (Typical), 1000 (Maximum), 0～1000cd/m² Adjustable',
        'Color coordinates (CIE 1931)':
          'Cx＝0.285 Cy＝0.300 (Adjustable; error ±0.003)',
        'Color temperature(K)': '9,000 (Typical), 3,000～10,000K Adjustable',
        'Color gamut(CIE 1931)': '105% NTSC',
        'Brightness uniformity': '97%',
        'Power maximum (W/m²)': '380 (±5%)',
        'Power average (W/m²)': '127',
        'Ambient light contrast': '5000:1 (10 lux light environment)',
        'Scan number': '54',
        'Frame change frequency (Hz)': '60',
        'Parametric gray scale(Bit)': '13',
        'Refresh frequency (Hz)': '1920～3840',
        'IP Protection grade': 'IP65 (Customizable)',
        'Point-by-point correction technique': 'Support',
        'Flash storage function': 'Support',
      },
    },
    {
      name: 'BYH-012Q',
      resolution: '480 × 270',
      brightness: '600 cd/m² (Typical), 800 cd/m² (Maximum)',
      contrast: '5000:1',
      viewingAngle: '165°/165°',
      features: [
        'Display every pixel on the module unit module, using full flip R, G, B chip package, each chip is fixed on the substrate',
        'Modular structure design, simple connection, light weight, more convenient installation and disassembly',
        'The display unit of the box body is a pre-maintenance magnetic suction structure, which is equipped with professional magnetic suction tools to complete installation and maintenance',
        'Driven by cross flow, excellent luminous uniformity, low power consumption',
        'High contrast',
        'Light weight, easy to install and disassemble',
      ],
      applications: [
        'Indoor Fine Pitch LED Displays',
        'Control Rooms',
        'Command Centers',
        'High-End Commercial Displays',
        'Conference Rooms',
      ],
      specifications: {
        'Product Model': 'C2-D1207 JC-1.2',
        'Pixel composition': '1R1G1B Full flip chips',
        'Pitch(mm)': '1.25',
        'Resolution(W × H)': '480 × 270',
        'Size(mm)': '600 × 337.5 × 35 (W × H × D, Included display module)',
        'Weight(kg)': '4.6 (Included display module)',
        'Flatness(mm)': '0.15',
        'Brightness(cd/m²)':
          '600 (Typical), 800 (Maximum), 0～1000cd/m² Adjustable',
        'Color coordinates (CIE 1931)':
          'Cx＝0.285 Cy＝0.300 (Adjustable; error ±0.003)',
        'Color temperature(K)': '9,000 (Typical), 3,000～10,000K Adjustable',
        'Color gamut(CIE 1931)': '105%NTSC',
        'Brightness uniformity': '97%',
        'Power maximum (W/m²)': '380 (±5%)',
        'Power average (W/m²)': '127',
        'Ambient light contrast': '5000:1 (10 lux light environment)',
        'Scan number': '54',
        'Frame change frequency (Hz)': '60',
        'Parametric gray scale(Bit)': '13',
        'Refresh frequency (Hz)': '1920～3840',
        'IP Protection grade': 'IP65 (Customizable)',
        'Point-by-point correction technique': 'Support',
        'Flash storage function': 'Support',
      },
    },
    {
      name: 'BYH-015Q',
      resolution: '384 × 216',
      brightness: '600 cd/m² (Typical), 800 cd/m² (Maximum)',
      contrast: '5000:1',
      viewingAngle: '165°/165°',
      features: [
        'Display every pixel on the module unit module, using full flip R, G, B chip package, each chip is fixed on the substrate',
        'Modular structure design, simple connection, light weight, more convenient installation and disassembly',
        'The display unit of the box body is a pre-maintenance magnetic suction structure, which is equipped with professional magnetic suction tools to complete installation and maintenance',
        'Driven by cross flow, excellent luminous uniformity, low power consumption',
        'High contrast',
        'Light weight, easy to install and disassemble',
      ],
      applications: [
        'Indoor Fine Pitch LED Displays',
        'Control Rooms',
        'Command Centers',
        'High-End Commercial Displays',
        'Conference Rooms',
      ],
      specifications: {
        'Product Model': 'C2-D1501 JC-1.5',
        'Pixel composition': '1R1G1B Full flip chips',
        'Pitch(mm)': '1.5625',
        'Resolution(W × H)': '384 × 216',
        'Size(mm)': '600 × 337.5 × 35 (W × H × D, Included display module)',
        'Weight(kg)': '4.6 (Included display module)',
        'Flatness(mm)': '0.15',
        'Brightness(cd/m²)':
          '600 (Typical), 800 (Maximum), 0～800cd/m² Adjustable',
        'Color coordinates (CIE 1931)':
          'Cx＝0.285 Cy＝0.300 (Adjustable; error ±0.003)',
        'Color temperature(K)': '9,000 (Typical), 3,000～10,000K Adjustable',
        'Color gamut(CIE 1931)': '105%NTSC',
        'Brightness uniformity': '97%',
        'Power maximum (W/m²)': '300 (±5%)',
        'Power average (W/m²)': '100',
        'Ambient light contrast': '5000:1 (10 lux light environment)',
        'Scan number': '54',
        'Frame change frequency (Hz)': '60',
        'Parametric gray scale(Bit)': '13',
        'Refresh frequency (Hz)': '1920～3840',
        'IP Protection grade': 'IP65 (Customizable)',
        'Point-by-point correction technique': 'Support',
        'Flash storage function': 'Support',
      },
    },
  ];

  // BOE All In One Series Product Versions based on the provided PDFs
  const allInOneVersions: ProductVersion[] = [
    {
      name: 'BYG012-108G',
      screenSize: '108 inches (implied by model name)',
      resolution: '1920*1080',
      brightness: '550 nits',
      contrast:
        'Not explicitly stated, but features mention high contrast for similar products',
      viewingAngle: '160/140',
      features: [
        'Standard 2K resolution high-definition picture, cabinet ultra-thin 35mm design',
        'More than 97% color saturation, 8 levels of brightness adjustable',
        'High hardware configuration: Android 8.0 system + Windows (optional), 4G RAM + 32G storage (expandable)',
        'Support wireless screen casting, multi-screen network interaction, one screen with multiple displays',
        'Support remote control, cell phone, tablet and other intelligent terminal remote control operation',
        'High interface compatibility: USB, HDMI input and output, RJ45 network port, infrared remote control, etc., supporting Wi-Fi, Bluetooth, 4G network, Ethernet and multiple network transmission methods.',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Educational Institutions',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.25',
        'LED Type': 'SMD1010',
        'Module Resolution(W × H)': '240*135',
        'Module Size(W × H × D)/(mm)': '300*168.75*2.96',
        'Pixel Density(dots/㎡)': '640000',
        'Cabinet Resolution(W × H)': '480*270',
        'Cabinet Dimension(W × H × D)/(mm)': '600*337.5*30.5',
        'Cabinet Area(m²)': '0.2025',
        'Cabinet Weight(Kg)': '4.6',
        'Cabinet Material': 'Die-casting Aluminum',
        'Cabinet Flatness(mm)': '≤ 0.1',
        'White Balance Brightness(nits)': '550',
        'Display Resolution(W × H)': '1920*1080',
        'Color Temperature(K)': '6500K-9300K',
        'Viewing Angle (Horizontal/Vertical)(°)': '160/140',
        'Refresh Frequency(Hz)': '2880~3840Hz',
        'Grayscale(bit)': '14',
        'AC Operating Voltage(V)': '200-240VAC',
        'Power(Maximum/Average)(W/m²)': '1800 / 540',
        'Operating System': 'Android 8.0',
        'Video Interface':
          'HDMI * 3(2 in & 1 out), USB 3.0 * 1, USB 2.0 * 2, RF * 1',
        'Audio Interface': 'Built-in 2*5W loudspeaker, External Audio*1',
        'Control Interface': 'RJ45 * 1, USB-B * 1, Bluetooth, WIFI, Infrared',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '5',
        'Brightness Control Mode': 'Manual/Automatic / Program Control',
        'Storage Temperature(℃)/Humidity(RH)': '-20~60/10%~80%',
        'Working Temperature(℃)/Humidity(RH)': '-10~40/10%~90%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '10000',
        'Module Maintenance Methods': 'Front Maintenance',
        'Power & Other Maintenance Methods': 'Front Maintenance',
        'Product Certifications': 'CCC, energy saving certification',
      },
    },
    {
      name: 'BYG015-135G',
      screenSize: '135 inches (implied by model name)',
      resolution: '1920*1080',
      brightness: '550 nits',
      contrast:
        'Not explicitly stated, but features mention high contrast for similar products',
      viewingAngle: '160/140',
      features: [
        'Standard 2K resolution high-definition picture, cabinet ultra-thin 35mm design',
        'More than 97% color saturation, 8 levels of brightness adjustable',
        'High hardware configuration: Android 8.0 system + Windows (optional), 4G RAM + 32G storage (expandable)',
        'Support wireless screen casting, multi-screen network interaction, one screen with multiple displays',
        'Support remote control, cell phone, tablet and other intelligent terminal remote control operation',
        'High interface compatibility: USB, HDMI input and output, RJ45 network port, infrared remote control, etc., supporting Wi-Fi, Bluetooth, 4G network, Ethernet and multiple network transmission methods.',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Educational Institutions',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.5625',
        'LED Type': 'SMD1010',
        'Module Resolution(W × H)': '192*108',
        'Module Size(W × H × D)/(mm)': '300*168.75*2.96',
        'Pixel Density(dots/㎡)': '409600',
        'Cabinet Resolution(W × H)': '384*216',
        'Cabinet Dimension(W × H × D)/(mm)': '600*337.5*30.5',
        'Cabinet Area(m²)': '0.2025',
        'Cabinet Weight(Kg)': '4.6',
        'Cabinet Material': 'Die-casting Aluminum',
        'Cabinet Flatness(mm)': '≤ 0.1',
        'White Balance Brightness(nits)': '550',
        'Display Resolution(W × H)': '1920*1080',
        'Color Temperature(K)': '6500-9300',
        'Viewing Angle (Horizontal/Vertical)(°)': '160/140',
        'Refresh Frequency(Hz)': '2880~3840Hz',
        'Grayscale(bit)': '14',
        'AC Operating Voltage(V)': '200-240VAC',
        'Power(Maximum/Average)(W/m²)': '2800/840',
        'Operating System': 'Android 8.0',
        'Video Interface':
          'HDMI * 3(2 in & 1 out), USB 3.0 * 1, USB 2.0 * 2, RF * 1',
        'Audio Interface': 'Built-in 2*5W loudspeaker, External Audio*1',
        'Control Interface': 'RJ45 * 1, USB-B * 1, Bluetooth, WIFI, Infrared',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '5',
        'Brightness Control Mode': 'Manual/Automatic / Program Control',
        'Storage Temperature(℃)/Humidity (RH)': '-20 - 60/10 % ~80%',
        'Working Temperature(℃)/Humidity (RH)': '-10~40/10 % ~90%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '10000',
        'Module Maintenance Methods': 'Front maintenance',
        'Power & Other Maintenance Methods': 'Front maintenance',
        'Product Certifications': 'CCC, energy saving certification',
      },
    },
    {
      name: 'BYG018-163G',
      screenSize: '163 inches (implied by model name)',
      resolution: '1920*1080',
      brightness: '550 nits',
      contrast:
        'Not explicitly stated, but features mention high contrast for similar products',
      viewingAngle: '160/140',
      features: [
        'Standard 2K resolution high-definition picture, cabinet ultra-thin 35mm design',
        'More than 97% color saturation, 8 levels of brightness adjustable',
        'High hardware configuration: Android 8.0 system + Windows (optional), 4G RAM + 32G storage (expandable)',
        'Support wireless screen casting, multi-screen network interaction, one screen with multiple displays',
        'Support remote control, cell phone, tablet and other intelligent terminal remote control operation',
        'High interface compatibility: USB, HDMI input and output, RJ45 network port, infrared remote control, etc., supporting Wi-Fi, Bluetooth, 4G network, Ethernet and multiple network transmission methods.',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Educational Institutions',
      ],
      specifications: {
        'Pixel Pitch(mm)': '1.875',
        'LED Type': 'SMD1415',
        'Module Resolution(W × H)': '160*90',
        'Module Size(W × H × D)/(mm)': '300*168.75*2.96',
        'Pixel Density(dots/㎡)': '284444',
        'Cabinet Resolution(W × H)': '320*180',
        'Cabinet Dimension(W × H × D)/(mm)': '600*337.5*30.5',
        'Cabinet Area(m²)': '0.2025',
        'Cabinet Weight(Kg)': '4.6',
        'Cabinet Material': 'Die-casting Aluminum',
        'Cabinet Flatness(mm)': '≤ 0.15',
        'White Balance Brightness(nits)': '550',
        'Display Resolution(W × H)': '1920*1080',
        'Color Temperature(K)': '6500-9300',
        'Viewing Angle (Horizontal/Vertical)(°)': '160/140',
        'Refresh Frequency(Hz)': '2880~3840Hz',
        'Grayscale(bit)': '14',
        'AC Operating Voltage(V)': '200-240VAC',
        'Power(Maximum/Average)(W/m²)': '2700/810',
        'Operating System': 'Android 8.0',
        'Video Interface':
          'HDMI * 3(2 in & 1 out), USB 3.0 * 1, USB 2.0 * 2, RF * 1',
        'Audio Interface': 'Built-in 2*5W loudspeaker, External Audio*1',
        'Control Interface': 'RJ45 * 1, USB-B * 1, Bluetooth, WIFI, Infrared',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '5',
        'Brightness Control Mode': 'Manual/Automatic / Program Control',
        'Storage Temperature(℃)/Humidity(RH)': '-20 ~ 60/10 % ~80%',
        'Working Temperature(℃)/Humidity(RH)': '-10~40/10 % ~90%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front Maintenance',
        'Power & Other Maintenance Methods': 'Front Maintenance',
        'Product Certifications': 'CCC, energy saving certification',
      },
    },
    {
      name: 'BYG025-216G',
      screenSize: '216 inches (implied by model name)',
      resolution: '1920*1080',
      brightness: '550 nits',
      contrast:
        'Not explicitly stated, but features mention high contrast for similar products',
      viewingAngle: '160/140',
      features: [
        'Standard 2K resolution high-definition picture, cabinet ultra-thin 35mm design',
        'More than 97% color saturation, 8 levels of brightness adjustable',
        'High hardware configuration: Android 8.0 system + Windows (optional), 4G RAM + 32G storage (expandable)',
        'Support wireless screen casting, multi-screen network interaction, one screen with multiple displays',
        'Support remote control, cell phone, tablet and other intelligent terminal remote control operation',
        'High interface compatibility: USB, HDMI input and output, RJ45 network port, infrared remote control, etc., supporting Wi-Fi, Bluetooth, 4G network, Ethernet and multiple network transmission methods.',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Educational Institutions',
      ],
      specifications: {
        'Pixel Pitch(mm)': '2.5',
        'LED Type': 'SMD2020',
        'Module Resolution(W × H)': '120*135',
        'Module Size(W × H × D)/(mm)': '300*337.5*2.96',
        'Pixel Density(dots/㎡)': '160000',
        'Cabinet Resolution(W × H)': '240*135',
        'Cabinet Dimension(W × H × D)/(mm)': '600*337.5*30.5',
        'Cabinet Area(m²)': '0.2025',
        'Cabinet Weight(Kg)': '4.6',
        'Cabinet Material': 'Die-casting Aluminum',
        'Cabinet Flatness(mm)': '≤ 0.1',
        'White Balance Brightness(nits)': '550',
        'Display Resolution(W × H)': '1920*1080',
        'Color Temperature(K)': '6500-9300',
        'Viewing Angle (Horizontal/Vertical)(°)': '160/140',
        'Refresh Frequency(Hz)': '2880~3840Hz',
        'Grayscale(bit)': '14',
        'AC Operating Voltage(V)': '200-240VAC',
        'Power(Maximum/Average)(W/m²)': '4200/1260',
        'Operating System': 'Android 8.0',
        'Video Interface':
          'HDMI * 3(2 in & 1 out), USB 3.0 * 1, USB 2.0 * 2, RF * 1',
        'Audio Interface': 'Built-in 2*5W loudspeaker, External Audio*1',
        'Control Interface': 'RJ45 * 1, USB-B * 1, Bluetooth, WIFI, Infrared',
        'Application Scenarios': 'Indoor',
        'Best View Distance(m)': '5',
        'Brightness Control Mode': 'Manual/Automatic / Program Control',
        'Storage Temperature(℃)/Humidity(RH)': '-20 ~ 60/10 % ~80%',
        'Working Temperature(℃)/Humidity(RH)': '-10~40/10 % ~90%',
        'Protection Grade': 'IP30',
        'LED Service Time(H)': '100000',
        'Module Maintenance Methods': 'Front Maintenance',
        'Power & Other Maintenance Methods': 'Front Maintenance',
        'Product Certifications': 'CCC, energy saving certification',
      },
    },
    {
      name: 'BYG108C',
      screenSize: '108 inches',
      resolution: '1920 * 1080',
      brightness: '550 nits',
      contrast: '≥100000:1 (Dark room)',
      viewingAngle: '150/150',
      features: [
        'Ultra-light and thin: the thickness of the box is only 29mm, saving installation space, the single box is only 4kg',
        'Seamless splicing: the screen body is flat without splicing, good flatness, in line with the national CCC certification products',
        'Dual backup design: power / signal can be dual backup; long life',
        'Quick maintenance: the box can be removed in a short time; easy to install',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Exhibition Halls',
      ],
      specifications: {
        'Panel Size': '108 inches',
        'Panel type': 'COB Flip Chip',
        'Panel resolution (H × W)': '1920 * 1080',
        'Pitch (mm)': '1.25',
        'Brightness(nits)': '550',
        'Color temperature': '3000-15000K (Adjustable)',
        'Contrast ratio': '≥100000:1 (Dark room)',
        'Viewing angle (°) (H/V)': '150/150',
        'Grayscale(bit)': '13',
        'Refresh rate(Hz)': '3840',
        'Ingress protection': 'IP30',
        'Maintenance method': 'Front',
        'Cabinet flatness(mm)': '≤0.15',
        'Operation system': 'Android/Windows (optional)',
        'Touch type': 'IR touch, 10 points',
        'Touch precision( mm)': '5',
        'Touch the distance between fingers (mm)': '30 No drift',
        'Video input': 'HDMI * 1(Side), HDMI * 1(Front)',
        'Audio/Video output': 'HDMI OUT * 1, 3.5mm Earphone * 1 (side)',
        'Touch output': 'USB-B * 1(side)',
        'Data input/output': 'USB3.0 * 1, USB2.0 * 3 (Front)',
        'Network interface': 'LAN * 1, WIFI * 2 (support wireless hotspot)',
        'Peak power consumption (W)': '972',
        'Average power consumption(W)': '390',
        'Power Supply Requirement': '100-240V/AC(50-60Hz)',
        'Continuous operating time(hrs)': '≥5000',
        'Operation temperature(℃)': '-10 ～ +40',
        'Operation humidity(RH)': '10 ～ 80%',
        'Storage temperature(℃)': '-20 ～ +50',
        'Storage humidity(RH)': '10 ～ 80%',
        'Certification type': 'CCC',
      },
    },
    {
      name: 'BYG135C',
      screenSize: '135 inches',
      resolution: '1920 * 1080',
      brightness: '550 nits',
      contrast: '≥100000:1 (Dark room)',
      viewingAngle: '150/150',
      features: [
        'Ultra-light and thin: the thickness of the box is only 29mm, saving installation space, the single box is only 4kg',
        'Seamless splicing: the screen body is flat without splicing, good flatness, in line with the national CCC certification products',
        'Dual backup design: power / signal can be dual backup; long life',
        'Quick maintenance: the box can be removed in a short time; easy to install',
      ],
      applications: [
        'Indoor Displays',
        'Conference Rooms',
        'Control Rooms',
        'Digital Signage',
        'Exhibition Halls',
      ],
      specifications: {
        'Panel Size': '135 inches',
        'Panel type': 'COB Flip Chip',
        'Panel resolution (H × W)': '1920 * 1080',
        'Pitch (mm)': '1.56',
        'Brightness(nits)': '550',
        'Color temperature': '3000-15000K (Adjustable)',
        'Contrast ratio': '≥100000:1 (Dark room)',
        'Viewing angle (°) (H/V)': '150/150',
        'Grayscale(bit)': '13',
        'Refresh rate(Hz)': '3840',
        'Ingress protection': 'IP30',
        'Maintenance method': 'Front',
        'Cabinet flatness(mm)': '≤0.15',
        'Operation system': 'Android/Windows (optional)',
        'Touch type': 'IR touch, 10 points',
        'Touch precision( mm)': '5',
        'Touch the distance between fingers (mm)': '30 No drift',
        'Video input': 'HDMI * 1(Side), HDMI * 1(Front)',
        'Audio/Video output': 'HDMI OUT * 1, 3.5mm Earphone * 1 (side)',
        'Touch output': 'USB-B * 1(side)',
        'Data input/output': 'USB3.0 * 1, USB2.0 * 3 (Front)',
        'Network interface': 'LAN * 1, WIFI * 2 (support wireless hotspot)',
        'Peak power consumption (W)': '1420',
        'Average power consumption(W)': '510',
        'Power Supply Requirement': '100-240V/AC(50-60Hz)',
        'Continuous operating time(hrs)': '≥5000',
        'Operation temperature(℃)': '-10 ～ +40',
        'Operation humidity(RH)': '10 ～ 80%',
        'Storage temperature(℃)': '-20 ～ +50',
        'Storage humidity(RH)': '10 ～ 80%',
        'Certification type': 'CCC',
      },
    },
  ];

  // New Product: BTS Series (Outdoor Channel Series)
  const btsVersions: ProductVersion[] = [
    {
      name: 'BTS025',
      resolution: '128 * 64',
      brightness: '≥ 5000 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '2.5',
        'LED Type': 'SMD1415',
        'Module Size (mm)': '320 * 160',
        'Module Resolution': '128 * 64',
        'Scanning Mode': '1/16',
        'Pixel Density (dot/m²)': '160000',
        'Brightness (nit)': '≥ 5000',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS030',
      resolution: '64 * 64 / 104 * 52',
      brightness: '≥ 5000 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '3/3.076',
        'LED Type': 'SMD1921/1415',
        'Module Size (mm)': '192 * 192 / 320 * 160',
        'Module Resolution': '64 * 64 / 104 * 52',
        'Scanning Mode': '1/16 ｜ 1/13',
        'Pixel Density (dot/m²)': '111111/105625',
        'Brightness (nit)': '≥ 5000',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS040',
      resolution: '80 * 40',
      brightness: '≥ 5000 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '4',
        'LED Type': 'SMD1921',
        'Module Size (mm)': '320 * 160',
        'Module Resolution': '80 * 40',
        'Scanning Mode': '1/10',
        'Pixel Density (dot/m²)': '62500',
        'Brightness (nit)': '≥ 5000',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS050',
      resolution: '64 * 32',
      brightness: '≥ 5000 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '5',
        'LED Type': 'SMD1921/2727',
        'Module Size (mm)': '320 * 160',
        'Module Resolution': '64 * 32',
        'Scanning Mode': '1/8',
        'Pixel Density (dot/m²)': '40000',
        'Brightness (nit)': '≥ 5000',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS060',
      resolution: '32 * 32 / 48 * 24',
      brightness: '≥ 4500 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '6/6.67',
        'LED Type': 'SMD2525/SMD3535/2727',
        'Module Size (mm)': '192 * 192 / 192 * 192 / 320 * 160',
        'Module Resolution': '32 * 32 / 48 * 24',
        'Scanning Mode': '1/8 ｜ 1/6',
        'Pixel Density (dot/m²)': '27777/22500',
        'Brightness (nit)': '≥ 4500',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS080',
      resolution: '40 * 20',
      brightness: '≥ 4200 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '8',
        'LED Type': 'SMD3535',
        'Module Size (mm)': '320 * 160',
        'Module Resolution': '40 * 20',
        'Scanning Mode': '1/5',
        'Pixel Density (dot/m²)': '15625',
        'Brightness (nit)': '≥ 4200',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
    {
      name: 'BTS100',
      resolution: '32 * 16',
      brightness: '≥ 5000 nit',
      contrast:
        'Not specified, but features mention high contrast for similar products',
      viewingAngle: '≥ 120° / ≥ 120°',
      features: [
        'High Flame Retardant Materials to prevent fire risk in outdoor high-temperature environments',
        'LED beads sealed with specialized glue for effective heat dissipation and strong weather resistance',
        'IC surface coated with three-proof paint for comprehensive protection',
        'Carefully selected high-quality LED beads for high brightness, wide viewing angles, and good color consistency',
        'Common cathode module consumes about 35% less power than common anode module, reducing operational costs',
        'Common cathode module operates at a temperature approximately 20 degrees lower, extending component lifespan',
        'Stringent quality control with ≥ 240hrs reliability test ensuring IC temperature ≤ 75 ℃',
      ],
      applications: [
        'Major Event Displays',
        'Traffic Command',
        'Naked Eye 3D',
        'Sports Events',
        'Outdoor Advertising',
      ],
      specifications: {
        'Pitch(mm)': '10',
        'LED Type': 'SMD3535',
        'Module Size (mm)': '320 * 160',
        'Module Resolution': '32 * 16',
        'Scanning Mode': '1/2',
        'Pixel Density (dot/m²)': '10000',
        'Brightness (nit)': '≥ 5000',
        'Color Temperature': '9000-15000K',
        'Viewing Angle Horizontal/Vertical': '≥ 120° / ≥ 120°',
        'Refresh Rate (Hz)': '1920/3840',
        'Operating Temperature (℃)': '-10 ~ 50',
        'Operating Humidity (RH)': '10% ～ 60%, no condensation',
        'Protection Grade': 'IP65',
        'Typical Lifespan (hrs)': '≥ 100,000',
      },
    },
  ];

  // New Product: BSL Outdoor Series
  const bslOutdoorVersions: ProductVersion[] = [
    {
      name: 'BSL-190',
      resolution: '128 * 128',
      brightness: '3500 nits',
      contrast: '≥ 3000:1',
      viewingAngle: '160°/110°',
      features: [
        'Cabinet adopts die-casting aluminum design, module without bottom shell, ultra-thin (45mm) and lightweight (12kg)',
        'Module, HUB, power supply support full front maintenance, allowing wall installation without rear maintenance channel',
        'Easy installation with rotary fast latch connection, enabling single-person assembly and saving labor costs',
        'Creative wireless module with hard connection design and gold-plated connectors for anti-oxidation and clean appearance',
        'Seamless splicing with high-precision CNC machining for ultra-high flatness',
        'Supports right-angle splicing with BSL-I series for column screen, magic square screen, naked eye 3D applications',
      ],
      applications: [
        'Outdoor Displays',
        'Column Screens',
        'Magic Square Screens',
        'Naked Eye 3D Displays',
        'Hanging, Stacking, Wall Mounting Installations',
      ],
      specifications: {
        'Pitch(mm)': '1.95',
        'LED model': 'SMD 1415',
        'Module resolution (W × H)': '128 * 128',
        'Module size (W × H)/(mm)': '250 * 250',
        'Pixel density (dot/㎡)': '262144',
        'Cabinet resolution (W × H)': '512 * 256',
        'Cabinet size (W × H × D)/(mm)': '1000 * 500 * 45',
        'Cabinet weight (Kg)': '12',
        'Cabinet texture': 'Die-casting Aluminum',
        'Brightness(nits)': '3500',
        'Contrast ratio': '≥ 3000:1',
        'Horizontal & vertical angle of view(°)': '160/110',
        'Refresh rate(Hz)': '3840',
        'Gray scale(bit)': '13-14',
        'Input AC voltage (V)': '100-240',
        'Maximum /average power (W/m²)': '610/210',
        'Operating temperature(℃)/ humidity(RH)': '-10-50/10%-60%',
        'Ingress protection': 'IP30',
        'Maintenance method': 'Front',
        'Installation method': 'Hanging, Stacking, Wall mounting',
      },
    },
    {
      name: 'BSL-260',
      resolution: '96 * 96',
      brightness: '3500 nits',
      contrast: '≥ 3000:1',
      viewingAngle: '160°/110°',
      features: [
        'Cabinet adopts die-casting aluminum design, module without bottom shell, ultra-thin (45mm) and lightweight (12kg)',
        'Module, HUB, power supply support full front maintenance, allowing wall installation without rear maintenance channel',
        'Easy installation with rotary fast latch connection, enabling single-person assembly and saving labor costs',
        'Creative wireless module with hard connection design and gold-plated connectors for anti-oxidation and clean appearance',
        'Seamless splicing with high-precision CNC machining for ultra-high flatness',
        'Supports right-angle splicing with BSL-I series for column screen, magic square screen, naked eye 3D applications',
      ],
      applications: [
        'Outdoor Displays',
        'Column Screens',
        'Magic Square Screens',
        'Naked Eye 3D Displays',
        'Hanging, Stacking, Wall Mounting Installations',
      ],
      specifications: {
        'Pitch(mm)': '2.6',
        'LED model': 'SMD 1415',
        'Module resolution (W × H)': '96 * 96',
        'Module size (W × H)/(mm)': '250 * 250',
        'Pixel density (dot/㎡)': '147456',
        'Cabinet resolution (W × H)': '384 * 192',
        'Cabinet size (W × H × D)/(mm)': '1000 * 500 * 45',
        'Cabinet weight (Kg)': '12',
        'Cabinet texture': 'Die-casting Aluminum',
        'Brightness(nits)': '3500',
        'Contrast ratio': '≥ 3000:1',
        'Horizontal & vertical angle of view(°)': '160/110',
        'Refresh rate(Hz)': '3840',
        'Gray scale(bit)': '13-14',
        'Input AC voltage (V)': '100-240',
        'Maximum /average power (W/m²)': '530/175',
        'Operating temperature(℃)/ humidity(RH)': '-10-50/10%-60%',
        'Ingress protection': 'IP30',
        'Maintenance method': 'Front',
        'Installation method': 'Hanging, Stacking, Wall mounting',
      },
    },
    {
      name: 'BSL-391',
      resolution: '64 * 64',
      brightness: '3500 nits',
      contrast: '≥ 3000:1',
      viewingAngle: '160°/110°',
      features: [
        'Cabinet adopts die-casting aluminum design, module without bottom shell, ultra-thin (45mm) and lightweight (12kg)',
        'Module, HUB, power supply support full front maintenance, allowing wall installation without rear maintenance channel',
        'Easy installation with rotary fast latch connection, enabling single-person assembly and saving labor costs',
        'Creative wireless module with hard connection design and gold-plated connectors for anti-oxidation and clean appearance',
        'Seamless splicing with high-precision CNC machining for ultra-high flatness',
        'Supports right-angle splicing with BSL-I series for column screen, magic square screen, naked eye 3D applications',
      ],
      applications: [
        'Outdoor Displays',
        'Column Screens',
        'Magic Square Screens',
        'Naked Eye 3D Displays',
        'Hanging, Stacking, Wall Mounting Installations',
      ],
      specifications: {
        'Pitch(mm)': '3.91',
        'LED model': 'SMD 1921',
        'Module resolution (W × H)': '64 * 64',
        'Module size (W × H)/(mm)': '250 * 250',
        'Pixel density (dot/㎡)': '65536',
        'Cabinet resolution (W × H)': '256 * 128',
        'Cabinet size (W × H × D)/(mm)': '1000 * 500 * 45',
        'Cabinet weight (Kg)': '12',
        'Cabinet texture': 'Die-casting Aluminum',
        'Brightness(nits)': '3500',
        'Contrast ratio': '≥ 3000:1',
        'Horizontal & vertical angle of view(°)': '160/110',
        'Refresh rate(Hz)': '3840',
        'Gray scale(bit)': '13-14',
        'Input AC voltage (V)': '100-240',
        'Maximum /average power (W/m²)': '620/210',
        'Operating temperature(℃)/ humidity(RH)': '-10-50/10%-60%',
        'Ingress protection': 'IP30',
        'Maintenance method': 'Front',
        'Installation method': 'Hanging, Stacking, Wall mounting',
      },
    },
  ];

  // New Product: LED Poster Screen (BTX015P/18P/25P)
  const ledPosterScreenVersions: ProductVersion[] = [
    {
      name: 'BTX015P',
      resolution: '208 * 104',
      brightness: '≥ 600 cd/m²',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'H: 160 V: 160',
      features: [
        'Can be installed before and after the design',
        'Ultra-thin lightweight box design (47mm thickness, 38.5KG weight) for light and fast installation/movement',
        'Multiple mounting methods: Landscape and portrait, wall-mounted, diagonal support',
        'Screen body is ready to plug in and use, easy to operate',
        'Aluminum frame material with CNC machining for high precision',
        'Metal conduction for heat dissipation, flatness, and silent operation',
        'Large viewing angle, high brush, high gray, high contrast',
        'Single IFI/HDMI/network cable connection, mobile APP and PC for rapid release and editing',
        'One-to-many LAN centralized release and Internet remote release',
        'Calibration data stored in the module with 5s restoration',
      ],
      applications: [
        'Digital Posters',
        'Retail Displays',
        'Exhibition Booths',
        'Information Kiosks',
        'Advertising Displays',
      ],
      specifications: {
        'Module Pitch(mm)': '1.5',
        'Module LED Type': 'SMD2121',
        'Module Resolution': '208 * 104',
        'Module Size (mm * mm)': '320 * 160',
        'Cabinet Resolution': '416 * 1248',
        'Cabinet Size (mm * mm)': '640 * 1920',
        'Pixel density (dot /m²)': '519168',
        'Cabinet Thickness (mm)': '48',
        'Cabinet Compose': '2 * 12',
        'Cabinet Weight': '40kg',
        'Frame frequency(Hz)': '60',
        'Refresh rate(Hz)': '≥3840',
        'Average power (W/㎡)': '125',
        'Max power (W/㎡)': '550',
        'Input voltage (V)': 'AC 100-240',
        'Brightness(cd/m²)': '≥ 600',
        'View Angle (°) H/V': '160/160',
        'Luminance uniformity': '≥97%',
        'Operating condition': '-10℃~50℃/10~65% RH',
        'Storage condition': '-20℃~60℃/10~65% RH',
        Reliability: 'HTS/LTS/THO/LTO/HTO 120 hrs+',
        'Transportation test': 'Package Vib /Drop',
      },
    },
    {
      name: 'BTX018P',
      resolution: '172 * 86',
      brightness: '≥ 800 cd/m²',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'H: 160 V: 160',
      features: [
        'Can be installed before and after the design',
        'Ultra-thin lightweight box design (47mm thickness, 38.5KG weight) for light and fast installation/movement',
        'Multiple mounting methods: Landscape and portrait, wall-mounted, diagonal support',
        'Screen body is ready to plug in and use, easy to operate',
        'Aluminum frame material with CNC machining for high precision',
        'Metal conduction for heat dissipation, flatness, and silent operation',
        'Large viewing angle, high brush, high gray, high contrast',
        'Single IFI/HDMI/network cable connection, mobile APP and PC for rapid release and editing',
        'One-to-many LAN centralized release and Internet remote release',
        'Calibration data stored in the module with 5s restoration',
      ],
      applications: [
        'Digital Posters',
        'Retail Displays',
        'Exhibition Booths',
        'Information Kiosks',
        'Advertising Displays',
      ],
      specifications: {
        'Module Pitch(mm)': '1.8',
        'Module LED Type': 'SMD1515',
        'Module Resolution': '172 * 86',
        'Module Size (mm * mm)': '320 * 160',
        'Cabinet Resolution': '344 * 1032',
        'Cabinet Size (mm * mm)': '640 * 1920',
        'Pixel density (dot /m²)': '355008',
        'Cabinet Thickness (mm)': '48',
        'Cabinet Compose': '2 * 12',
        'Cabinet Weight': '40kg',
        'Frame frequency(Hz)': '60',
        'Refresh rate(Hz)': '≥3840',
        'Average power (W/㎡)': '125',
        'Max power (W/㎡)': '550',
        'Input voltage (V)': 'AC 100-240',
        'Brightness(cd/m²)': '≥ 800',
        'View Angle (°) H/V': '160/160',
        'Luminance uniformity': '≥97%',
        'Operating condition': '-10℃~50℃/10~65% RH',
        'Storage condition': '-20℃~60℃/10~65% RH',
        Reliability: 'HTS/LTS/THO/LTO/HTO 120 hrs+',
        'Transportation test': 'Package Vib /Drop',
      },
    },
    {
      name: 'BTX025P',
      resolution: '128 * 64',
      brightness: '≥ 700 cd/m²',
      contrast: 'High contrast (implied by features)',
      viewingAngle: 'H: 160 V: 160',
      features: [
        'Can be installed before and after the design',
        'Ultra-thin lightweight box design (47mm thickness, 38.5KG weight) for light and fast installation/movement',
        'Multiple mounting methods: Landscape and portrait, wall-mounted, diagonal support',
        'Screen body is ready to plug in and use, easy to operate',
        'Aluminum frame material with CNC machining for high precision',
        'Metal conduction for heat dissipation, flatness, and silent operation',
        'Large viewing angle, high brush, high gray, high contrast',
        'Single IFI/HDMI/network cable connection, mobile APP and PC for rapid release and editing',
        'One-to-many LAN centralized release and Internet remote release',
        'Calibration data stored in the module with 5s restoration',
      ],
      applications: [
        'Digital Posters',
        'Retail Displays',
        'Exhibition Booths',
        'Information Kiosks',
        'Advertising Displays',
      ],
      specifications: {
        'Module Pitch(mm)': '2.5',
        'Module LED Type': 'SMD2121',
        'Module Resolution': '128 * 64',
        'Module Size (mm * mm)': '320 * 160',
        'Cabinet Resolution': '256 * 768',
        'Cabinet Size (mm * mm)': '640 * 1920',
        'Pixel density (dot /m²)': '196608',
        'Cabinet Thickness (mm)': '48',
        'Cabinet Compose': '2 * 12',
        'Cabinet Weight': '40kg',
        'Frame frequency(Hz)': '60',
        'Refresh rate(Hz)': '≥3840',
        'Average power (W/㎡)': '100',
        'Max power (W/㎡)': '420',
        'Input voltage (V)': 'AC 100-240',
        'Brightness(cd/m²)': '≥ 700',
        'View Angle (°) H/V': '160/160',
        'Luminance uniformity': '≥97%',
        'Operating condition': '-10℃~50℃/10~65% RH',
        'Storage condition': '-20℃~60℃/10~65% RH',
        Reliability: 'HTS/LTS/THO/LTO/HTO 120 hrs+',
        'Transportation test': 'Package Vib /Drop',
      },
    },
  ];

  // New Product: BTR Series (Cinema LED Display)
  const btrVersions: ProductVersion[] = [
    {
      name: 'BTR-10',
      resolution: '4096*2160',
      brightness: '48nit (DCI standard) / 300nit (industry standard)',
      contrast: 'Superb contrast with real black',
      viewingAngle: 'Not explicitly stated, but implied wide for cinema',
      features: [
        'Superb contrast with real black',
        'Vividly detailed presentation',
        'Realistic interpretation of color gamut',
        'Ultra-bright dynamic range',
        'No projection room needed, allowing for more seating (approx. 30 seats)',
        'More vibrant colors and saturated content, multiplying the viewing experience',
        'Cinemas can be used for multi-business purposes: talk shows, ball games, script killing, etc.',
        'Integration of sound and light, easy to control and operate',
      ],
      applications: [
        'HD Cinema',
        'Film Screenings',
        'Live Events (Talk Shows, Sports)',
        'Multi-business Venues',
      ],
      specifications: {
        'Full-screen size (mm)': 'height 5400 X width 10560 X thickness 54.4',
        'Box unit Pixel Pitch': 'P2.5',
        'Physical Resolution (W × H)': '4096*2160',
        'Ordinary&Highest brightness':
          '48nit(DCI standard)/300nit (industry standard)',
        'Color Gamut': 'DCI-P3 (cinema specifications)',
        'Supported frame rates (2D)': '24fps/48fps/60fps',
        'Supported frame rates (3D)': 'left and right eye images at 30fps each',
      },
    },
    {
      name: 'BTR-16',
      resolution: '4096*2160',
      brightness: '48nit (DCI standard) / 300nit (industry standard)',
      contrast: 'Superb contrast with real black',
      viewingAngle: 'Not explicitly stated, but implied wide for cinema',
      features: [
        'Superb contrast with real black',
        'Vividly detailed presentation',
        'Realistic interpretation of color gamut',
        'Ultra-bright dynamic range',
        'No projection room needed, allowing for more seating (approx. 30 seats)',
        'More vibrant colors and saturated content, multiplying the viewing experience',
        'Cinemas can be used for multi-business purposes: talk shows, ball games, script killing, etc.',
        'Integration of sound and light, easy to control and operate',
      ],
      applications: [
        'HD Cinema',
        'Film Screenings',
        'Live Events (Talk Shows, Sports)',
        'Multi-business Venues',
      ],
      specifications: {
        'Full-screen size (mm)': 'height 8640 X width 16384 X thickness 56.7',
        'Box unit Pixel Pitch': 'P4',
        'Physical Resolution (W × H)': '4096*2160',
        'Ordinary&Highest brightness':
          '48nit(DCI standard)/300nit (industry standard)',
        'Color Gamut': 'DCI-P3 (cinema specifications)',
        'Supported frame rates (2D)': '24fps/48fps/60fps',
        'Supported frame rates (3D)': 'left and right eye images at 30fps each',
      },
    },
  ];

  const qm22aVersions: ProductVersion[] = [
    {
      name: 'QM22 A Standard',
      screenSize: '22 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '250 cd/m²',
      contrast: '1000:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '72% NTSC',
      features: [
        'Full HD Resolution',
        'IPS Panel Technology',
        'Wide Viewing Angles',
        'Low Blue Light Technology',
        'Flicker-Free',
        'VESA Mount Compatible',
      ],
      applications: [
        'Office Work',
        'Home Entertainment',
        'Education',
        'Entry-Level Design',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '60Hz',
        HDMI: '1 port (HDMI 1.4)',
        DisplayPort: '1 port (DP 1.2)',
        USB: '2 × USB 3.0',
        'Power Consumption': '30W (typical)',
        Dimensions: '495 × 300 × 50mm',
        Weight: '3.5kg',
        Certification: 'Energy Star, RoHS',
      },
    },
    {
      name: 'QM22 A Pro',
      screenSize: '22 inches',
      resolution: '2560 × 1440 (QHD)',
      brightness: '300 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '4ms',
      colorGamut: '99% sRGB',
      features: [
        'QHD Resolution',
        'HDR Support',
        'Height Adjustable Stand',
        'Blue Light Reduction',
        'Built-in Speakers',
        'USB-C Connectivity',
      ],
      applications: [
        'Professional Work',
        'Content Creation',
        'Gaming',
        'Graphic Design',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2331mm',
        'Display Colors': '1.07B (8-bit + FRC)',
        'Refresh Rate': '75Hz',
        HDMI: '2 ports (HDMI 2.0)',
        'USB-C': '1 port (65W PD)',
        'USB Hub': '4 × USB 3.0',
        'Power Consumption': '45W (typical)',
        Dimensions: '495 × 300 × 50mm',
        Weight: '4.2kg',
        Certification: 'TÜV Rheinland, Energy Star',
      },
    },
    {
      name: 'QM33 A',
      screenSize: '33.2 inches',
      resolution: '1920 × 1920',
      brightness: '500 cd/m²',
      contrast: '1000:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '72% NTSC',
      features: [
        'High Brightness Display',
        'Android 7.1 OS',
        'Quad-Core Processor',
        'Slim Design',
        'Full Metal Shell',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'ADS LCD',
        Backlight: 'E-LED',
        'Aspect Ratio': '1:1',
        'Pixel Pitch': 'N/A',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '60Hz',
        HDMI: '1 port (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '84W (typical)',
        Dimensions: '615.36 × 615.36 × 25.1 mm',
        Weight: '9.5 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];

  // New Product Version for FE Series
  const feSeriesVersions: ProductVersion[] = [
    {
      name: 'Free standing kiosk 32"',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '72% NTSC',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Built-in Speakers',
        'Tempered Glass Protection',
        'Easy Maintenance',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'ADS LCD',
        Backlight: 'E-LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '60W (typical)',
        Dimensions: '728.5 × 434.4 × 59.9 mm',
        Weight: '6.8 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
    {
      name: 'Free standing kiosk 43"',
      screenSize: '43 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '72% NTSC',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Built-in Speakers',
        'Tempered Glass Protection',
        'Easy Maintenance',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'ADS LCD',
        Backlight: 'E-LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M (8-bit)',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '80W (typical)',
        Dimensions: '1010 × 580 × 59.9 mm',
        Weight: '9.5 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];
  // New Product Version for RS43AM
  const androiddigital43Versions: ProductVersion[] = [
    {
      name: 'RS43AM',
      screenSize: '43 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '300 cd/m²',
      contrast: '≥ 1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'FHD Resolution',
        'Android 9.0 OS',
        'Built-in Speaker',
        'Slim and Light Design',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'FHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': 'N/A',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '1 port',
        USB: '2 ports',
        'Power Consumption': '≤ 70W',
        Dimensions: '1013 × 602 × 51 mm',
        Weight: '13 kg',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
    {
      name: 'RS32AM',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '300 cd/m²',
      contrast: '≥ 1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'FHD Resolution',
        'Android 9.0 OS',
        'Built-in Speakers',
        'Slim and Light Design',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'FHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': 'N/A',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '1 port',
        USB: '2 ports',
        'Power Consumption': '≤ 65W',
        Dimensions: '759 × 453 × 51 mm',
        Weight: '7.5 kg',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];

  // New Product Version for SR Series
  const srSeriesVersions: ProductVersion[] = [
    {
      name: 'Digital Signage kiosk 43"',
      screenSize: '43 inches',
      resolution: '3840 × 2160 (4K UHD)',
      brightness: '700 cd/m²',
      contrast: '≥ 1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        '4K Ultra HD Resolution',
        'Super Slim Bezel Design',
        'Lightweight Aluminum Frame',
        'High Brightness for Outdoor Use',
        'Android 13 OS',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': 'N/A',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '≤ 157W',
        Dimensions: '956 × 546 × 61.7 mm',
        Weight: '8.5 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '10% ~ 85% RH',
      },
    },
    {
      name: 'Digital Signage kiosk 49"',
      screenSize: '49 inches',
      resolution: '3840 × 2160 (4K UHD)',
      brightness: '700 cd/m²',
      contrast: '≥ 1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        '4K Ultra HD Resolution',
        'Super Slim Bezel Design',
        'Lightweight Aluminum Frame',
        'High Brightness for Outdoor Use',
        'Android 13 OS',
        'Multiple Connectivity Options',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': 'N/A',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '≤ 163W',
        Dimensions: '1088 × 619 × 61.7 mm',
        Weight: '9.8 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '10% ~ 85% RH',
      },
    },
    // Add more sizes as needed...
  ];
  // New Product Version for FL Series
  const flSeriesVersions: ProductVersion[] = [
    {
      name: 'Touch Free Standing Kiosk 32"',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '400 cd/m²',
      contrast: '≥ 1000:1',
      viewingAngle: '178°/178°',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Built-in Speakers',
        'Slim Design',
        'Multiple Connectivity Options',
        'VESA Mounting Compatible',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '≤ 70W',
        Dimensions: '730 × 430 × 50 mm',
        Weight: '8 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
    {
      name: 'Touch Free Standing Kiosk 43"',
      screenSize: '43 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '400 cd/m²',
      contrast: '≥ 1000:1',
      viewingAngle: '178°/178°',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Built-in Speakers',
        'Slim Design',
        'Multiple Connectivity Options',
        'VESA Mounting Compatible',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports (HDMI 2.0)',
        USB: '2 × USB 3.0',
        'Power Consumption': '≤ 90W',
        Dimensions: '970 × 570 × 50 mm',
        Weight: '10 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];
  // New Product Version for FP Series
  const fpSeriesVersions: ProductVersion[] = [
    {
      name: 'Captive touch kiosk 32"',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Capacitive Touch',
        'Built-in Speakers',
        'Tempered Glass Protection',
        'Easy Maintenance',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'ADS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '1 port',
        USB: '1 port',
        'Power Consumption': '≤ 60W',
        Dimensions: '468.3 × 1640 × 68.5 mm',
        Weight: '30 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
    {
      name: 'captive touch kiosk 43"',
      screenSize: '43 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Android 9.0 OS',
        'Capacitive Touch',
        'Built-in Speakers',
        'Tempered Glass Protection',
        'Easy Maintenance',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'ADS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '1 port',
        USB: '1 port',
        'Power Consumption': '≤ 80W',
        Dimensions: '614.6 × 1750.7 × 68.5 mm',
        Weight: '43 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];
  // New Product Versions for VW Series
  const vwSeriesVersions: ProductVersion[] = [
    {
      name: 'VM46L-Z / VP46L-Z (46 inch, 1.7/0.88mm Bezel)',
      screenSize: '46 inch',
      resolution: '1920 × 1080 (FHD)',
      brightness: '500 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'ADSDS Technology',
        'FHD Resolution',
        '500nits Brightness',
        '7x24 Operation',
        '1.7/0.88mm Slim Bezel',
        'Auto Gamma and Color Calibration',
        'RS232 Control',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
      ],
      applications: [
        'Video Walls',
        'Control Rooms',
        'Digital Signage',
        'Public Displays',
      ],
      specifications: {
        'Physical Joint': '1.7mm (VM46L-Z) / 0.88mm (VP46L-Z)',
        'Aspect Ratio': '16:9',
        'Operation Time': '7 × 24H',
        'Life Time (Light Source)': '50,000 Hrs (Typ.)',
        'Power Supply': 'AC 100~240V 50/60Hz',
        'Power Consumption': '165W (Typ) for VM46L-Z, 160W (Typ) for VP46L-Z',
        'Operation Temperature': '0 ℃ ~40 ℃',
        'Operation Humidity': '20%~80% RH',
        'HDMI In': '2 (HDMI 2.0)',
        'DP In': '2 (DP 1.2)',
        'DP Out': '1 (Daisy Chain, up to 4K input)',
        'Audio Out': '1 (3.5mm stereo jack)',
        'RS232 In': '1 (RJ45, Common used for IR in)',
        'RS232 Out': '1 (RJ45, Support IR out)',
        USB: '1 (2.0, Firmware update only)',
        'Body Size (VM46L-Z)': '1020.08 × 574.57 × 95.5mm',
        'Body Size (VP46L-Z)': '1018.96 × 573.55 × 95.5mm',
        'Set Weight': '19.5kg',
        'VESA Mounting': '400 × 400',
      },
    },
    {
      name: 'VM55L-Z (55 inch, 1.7mm Bezel)',
      screenSize: '55 inch',
      resolution: '1920 × 1080 (FHD)',
      brightness: '500 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'ADSDS Technology',
        'FHD Resolution',
        '500nits Brightness',
        '7x24 Operation',
        '1.7mm Slim Bezel',
        'Auto Gamma and Color Calibration',
        'RS232 Control',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
        '25% Haze, 3H',
      ],
      applications: [
        'Video Walls',
        'Control Rooms',
        'Digital Signage',
        'Public Displays',
      ],
      specifications: {
        'Physical Joint': '1.7mm',
        'Aspect Ratio': '16:9',
        'Operation Time': '7 × 24H',
        'Life Time': '50,000 Hrs (Typ.)',
        'Power Supply': 'AC 100~240V 50/60Hz',
        'Power Consumption': '240W (Typ)',
        'Power Consumption (Stand by)': '≤0.5W',
        'Operation Temperature': '0 ℃ ~50 ℃',
        'Operation Humidity': '10%~80% RH',
        'HDMI In': '2 (HDMI 2.0)',
        'DP In': '2 (DP 1.2)',
        'DP Out': '1 (Daisy Chain, up to 4K input)',
        'Audio Out': '1 (3.5mm stereo jack)',
        'RS232 In': '1 (RJ45, Common used for IR in)',
        'RS232 Out': '1 (RJ45, Support IR OUT)',
        USB: '1 (2.0, Firmware update only)',
        'Body Size': '1212.4x683.3x95mm',
        'Set Weight': '25kg',
        'VESA Mounting': '400 × 400mm',
      },
    },
    {
      name: 'VE55L-ZO (55 inch, 3.5mm Bezel)',
      screenSize: '55 inch',
      resolution: '1920 × 1080 (FHD)',
      brightness: '500 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'ADSDS Technology',
        'FHD Resolution',
        '500/700nits Brightness (model dependent)',
        '7x24 Operation',
        '3.5mm Slim Bezel',
        'Auto Gamma and Color Calibration',
        'RS232 Control',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
        '25% Haze, 3H',
      ],
      applications: [
        'Video Walls',
        'Control Rooms',
        'Digital Signage',
        'Public Displays',
      ],
      specifications: {
        'Physical Joint': '3.5mm',
        'Aspect Ratio': '16:9',
        'Operation Time': '7 × 24H',
        'Life Time': '50,000 Hrs (Typ.)',
        'Power Supply': 'AC 100~240V 50/60Hz',
        'Power Consumption': '240W (Typ)',
        'Power Consumption (Stand by)': '≤0.5W',
        'Operation Temperature': '0 ℃ ~50 ℃',
        'Operation Humidity': '10%~80% RH',
        'HDMI In': '2 (HDMI 2.0)',
        'DP In': '2 (DP 1.2)',
        'DP Out': '1 (Daisy Chain, up to 4K input)',
        'Audio Out': '1 (3.5mm stereo jack)',
        'RS232 In': '1 (RJ45, Common used for IR in)',
        'RS232 Out': '1 (RJ45, Support IR OUT)',
        USB: '1 (2.0, Firmware update only)',
        'Body Size': '1213.5x684.3x95mm',
        'Set Weight': '25kg',
        'VESA Mounting': '400 × 400mm',
      },
    },
    {
      name: 'VP55H-Z / VP55L-Z (55 inch, 0.88mm Bezel)',
      screenSize: '55 inch',
      resolution: '1920 × 1080 (FHD)',
      brightness: '700 cd/m² (VP55H-Z) / 500 cd/m² (VP55L-Z)',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '8ms',
      colorGamut: '16.7M',
      features: [
        'ADSDS Technology',
        'FHD Resolution',
        '700nits/500nits Brightness',
        '7x24 Operation',
        '0.88mm Slim Bezel',
        'Auto Gamma and Color Calibration',
        'RS232 Control',
        'Landscape & Portrait Installation Support',
        'VESA Mounting Interface',
        '25% Haze, 3H',
      ],
      applications: [
        'Video Walls',
        'Control Rooms',
        'Digital Signage',
        'Public Displays',
      ],
      specifications: {
        'Physical Joint': '0.88mm',
        'Aspect Ratio': '16:9',
        'Operation Time': '7 × 24H',
        'Life Time': '50,000 Hrs (Typ.)',
        'Power Supply': 'AC 100~240V 50/60Hz',
        'Power Consumption': '240W (Typ)',
        'Power Consumption (Stand by)': '≤0.5W',
        'Operation Temperature': '0 ℃ ~50 ℃',
        'Operation Humidity': '10%~80% RH',
        'HDMI In': '2 (HDMI 2.0)',
        'DP In': '2 (DP 1.2)',
        'DP Out': '1 (Daisy Chain, up to 4K input)',
        'Audio Out': '1 (3.5mm stereo jack)',
        'RS232 In': '1 (RJ45, Common used for IR in)',
        'RS232 Out': '1 (RJ45, Support IR OUT)',
        USB: '1 (2.0, Firmware update only)',
        'Body Size': '1210.8 (W) × 681.5 (H) × 96 (D) mm',
        'Set Weight': '25kg',
        'VESA Mounting': '400 × 400mm',
      },
    },
  ];
  // New Product Version for BM326A
  const bm326AVersions: ProductVersion[] = [
    {
      name: 'BM326A',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '400 cd/m²',
      contrast: '1000:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Ultra Slim Design',
        'Built-in Speakers',
        'Multiple Connectivity Options (HDMI, VGA, USB)',
        'VESA Mounting Compatible',
        'Low Power Consumption',
      ],
      applications: [
        'Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Display Colors': '16.7M',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports',
        USB: '2 ports',
        'Power Consumption': '≤ 70W',
        Dimensions: '730 × 430 × 50 mm',
        Weight: '8 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];
  // New Product Version for FSCFP
  const fscfpVersions: ProductVersion[] = [
    {
      name: 'FSCFP 55"',
      screenSize: '55 inches',
      resolution: '1920 × 1080 (FHD)',
      brightness: '1500 ~ 3500 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '6ms',
      colorGamut: '1.07B (10bit)',
      features: [
        'UHD Resolution with High Brightness',
        'Blackening Effect Free (Tni 105 ℃)',
        'Visible with Polarized Sunglasses',
        'IP55 Standard with Thunder and Corrosion Proof',
        'AR Tempered Glass and Fan Cooling System',
        'Ambient Light Sensor for Auto Brightness Adjustment',
        'Internal Temperature Sensor',
      ],
      applications: [
        'Outdoor Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Public Information Displays',
      ],
      specifications: {
        'Panel Type': 'UHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '9:16',
        'Life Time': '50,000 hrs',
        'Cooling System': 'Fan',
        Noise: '<65dB',
        'Operation Temperature': '-30 ℃ ~ 50 ℃',
        'Operation Humidity': '5% - 90% RH',
        'Storage Temperature': '-20 °C ~ 60 °C',
        'Storage Humidity': '5% - 100% RH',
        'Power Supply': 'AC 100 - 240V ~ 50/60Hz',
        'Power Consumption': '≤ 300W',
        'Stand By': '≤ 0.5W',
        Dimensions: '1990 × 800 × 400 mm',
        Weight: '90 ± 2kg',
      },
    },
    {
      name: 'FSCFP 65"',
      screenSize: '65 inches',
      resolution: '3840 × 2160 (UHD)',
      brightness: '1500 ~ 3500 cd/m²',
      contrast: '1400:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '6ms',
      colorGamut: '1.07B (10bit)',
      features: [
        'UHD Resolution with High Brightness',
        'Blackening Effect Free (Tni 105 ℃)',
        'Visible with Polarized Sunglasses',
        'IP55 Standard with Thunder and Corrosion Proof',
        'AR Tempered Glass and Fan Cooling System',
        'Ambient Light Sensor for Auto Brightness Adjustment',
        'Internal Temperature Sensor',
      ],
      applications: [
        'Outdoor Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Public Information Displays',
      ],
      specifications: {
        'Panel Type': 'UHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '9:16',
        'Life Time': '50,000 hrs',
        'Cooling System': 'Fan',
        Noise: '<65dB',
        'Operation Temperature': '-30 ℃ ~ 50 ℃',
        'Operation Humidity': '5% - 90% RH',
        'Storage Temperature': '-20 °C ~ 60 °C',
        'Storage Humidity': '5% - 100% RH',
        'Power Supply': 'AC 100 - 240V ~ 50/60Hz',
        'Power Consumption': '≤ 600W',
        'Stand By': '≤ 0.5W',
        Dimensions: '2100 × 924 × 450 mm',
        Weight: '100 ± 2kg',
      },
    },
  ];
  // New Product Version for ASCW
  const ascwVersions: ProductVersion[] = [
    {
      name: 'ASCW 49"',
      screenSize: '49 inches',
      resolution: '1920 × 1080 (FHD)',
      brightness: '2500 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'FHD Resolution with High Brightness',
        'Blackening Effect Free (Tni 105 ℃)',
        'Visible with Polarized Sunglasses',
        'IP65 Standard with Thunder and Corrosion Proof',
        'AR Tempered Glass and Air Conditioning Cooling System',
        'Ambient Light Sensor for Auto Brightness Adjustment',
        'Internal Temperature Sensor',
      ],
      applications: [
        'Outdoor Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Public Information Displays',
      ],
      specifications: {
        'Panel Type': 'FHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Life Time': '50,000 hrs',
        'Cooling System': 'Air Conditioner',
        Noise: '<65dB',
        'Operation Temperature': '-40 ℃ ~ 55 ℃',
        'Operation Humidity': '5% - 95% RH',
        'Storage Temperature': '-20 °C ~ 60 °C',
        'Storage Humidity': '5% - 95% RH',
        'Power Supply': 'AC110 or 220V ± 10% ~ 50/60Hz',
        'Power Consumption': '≤ 600W',
        Dimensions: '1314 × 884 × 345 mm',
        Weight: '115 ± 2kg',
      },
    },
    {
      name: 'ASCW 55"',
      screenSize: '55 inches',
      resolution: '1920 × 1080 (FHD)',
      brightness: '3000 cd/m²',
      contrast: '1400:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'FHD Resolution with High Brightness',
        'Blackening Effect Free (Tni 105 ℃)',
        'Visible with Polarized Sunglasses',
        'IP65 Standard with Thunder and Corrosion Proof',
        'AR Tempered Glass and Air Conditioning Cooling System',
        'Ambient Light Sensor for Auto Brightness Adjustment',
        'Internal Temperature Sensor',
      ],
      applications: [
        'Outdoor Digital Signage',
        'Retail Displays',
        'Corporate Presentations',
        'Public Information Displays',
      ],
      specifications: {
        'Panel Type': 'FHD LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Life Time': '50,000 hrs',
        'Cooling System': 'Air Conditioner',
        Noise: '<65dB',
        'Operation Temperature': '-40 ℃ ~ 55 ℃',
        'Operation Humidity': '5% - 95% RH',
        'Storage Temperature': '-20 °C ~ 60 °C',
        'Storage Humidity': '5% - 95% RH',
        'Power Supply': 'AC110 or 220V ± 10% ~ 50/60Hz',
        'Power Consumption': '≤ 700W',
        Dimensions: '1450 × 960 × 325 mm',
        Weight: '142 ± 2kg',
      },
    },
    // Add more sizes as needed...
  ];
  // New Product Version for IR Interactive
  const irInteractiveVersions: ProductVersion[] = [
    {
      name: 'IR Interactive 65"',
      screenSize: '65 inches',
      resolution: '3840 × 2160 (UHD)',
      brightness: '≥ 350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '<2 ms (First Point), <8 ms (Continuation)',
      colorGamut: '1.07B (10bit)',
      features: [
        'UHD Resolution with ≥ 350nits Brightness',
        'Powerful Quad-core CPU (Cortex-A76 and Cortex-A55)',
        'Mali-G610 MC4 GPU',
        'Zero Bonding Technology',
        'Slim Design with Android 13.0',
        'Wireless Screen for Portable Devices',
        'Built-in Camera and Microphone (optional)',
        'Powerful Interactive Board Software',
        'OCR Function for Smart Handwriting Recognition',
        'Infrared Touch Technology with Multi-Touch Support (up to 40 points)',
        'OPS Slot Available',
        'Auto Calibration and Anti-light Features',
      ],
      applications: [
        'Education',
        'Corporate Training',
        'Interactive Presentations',
        'Digital Signage',
      ],
      specifications: {
        'Panel Type': 'Ultra HD Direct type LED',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Life Time': '50,000 hrs',
        'Power Supply': 'AC 100 - 240V ~ 50/60Hz',
        'Power Consumption': '≤ 290W (Max), Eco < 75W',
        'Stand By': '≤ 0.5W',
        Dimensions: '1470.9 × 97.5 × 897.5 mm',
        Weight: '45 ± 2kg',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '10% - 90% RH',
      },
    },
    {
      name: 'IR Interactive 75"',
      screenSize: '75 inches',
      resolution: '3840 × 2160 (UHD)',
      brightness: '≥ 350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '<2 ms (First Point), <8 ms (Continuation)',
      colorGamut: '1.07B (10bit)',
      features: [
        'UHD Resolution with ≥ 350nits Brightness',
        'Powerful Quad-core CPU (Cortex-A76 and Cortex-A55)',
        'Mali-G610 MC4 GPU',
        'Zero Bonding Technology',
        'Slim Design with Android 13.0',
        'Wireless Screen for Portable Devices',
        'Built-in Camera and Microphone (optional)',
        'Powerful Interactive Board Software',
        'OCR Function for Smart Handwriting Recognition',
        'Infrared Touch Technology with Multi-Touch Support (up to 40 points)',
        'OPS Slot Available',
        'Auto Calibration and Anti-light Features',
      ],
      applications: [
        'Education',
        'Corporate Training',
        'Interactive Presentations',
        'Digital Signage',
      ],
      specifications: {
        'Panel Type': 'Ultra HD Direct type LED',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Life Time': '50,000 hrs',
        'Power Supply': 'AC 100 - 240V ~ 50/60Hz',
        'Power Consumption': '≤ 320W (Max), Eco < 75W',
        'Stand By': '≤ 0.5W',
        Dimensions: '1692.1 × 97.5 × 1021.9 mm',
        Weight: '55 ± 2kg',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '10% - 90% RH',
      },
    },
    {
      name: 'IR Interactive 86"',
      screenSize: '86 inches',
      resolution: '3840 × 2160 (UHD)',
      brightness: '≥ 350 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '<2 ms (First Point), <8 ms (Continuation)',
      colorGamut: '1.07B (10bit)',
      features: [
        'UHD Resolution with ≥ 350nits Brightness',
        'Powerful Quad-core CPU (Cortex-A76 and Cortex-A55)',
        'Mali-G610 MC4 GPU',
        'Zero Bonding Technology',
        'Slim Design with Android 13.0',
        'Wireless Screen for Portable Devices',
        'Built-in Camera and Microphone (optional)',
        'Powerful Interactive Board Software',
        'OCR Function for Smart Handwriting Recognition',
        'Infrared Touch Technology with Multi-Touch Support (up to 40 points)',
        'OPS Slot Available',
        'Auto Calibration and Anti-light Features',
      ],
      applications: [
        'Education',
        'Corporate Training',
        'Interactive Presentations',
        'Digital Signage',
      ],
      specifications: {
        'Panel Type': 'Ultra HD Direct type LED',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Life Time': '50,000 hrs',
        'Power Supply': 'AC 100 - 240V ~ 50/60Hz',
        'Power Consumption': '≤ 350W (Max), Eco < 75W',
        'Stand By': '≤ 0.5W',
        Dimensions: '1943.4 × 97.5 × 1166 mm',
        Weight: '70 ± 2kg',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '10% - 90% RH',
      },
    },
  ];

  // New Product Version for Touch Transparent Kiosk
  const touchTransparentKioskVersions: ProductVersion[] = [
    {
      name: 'Touch Transparent Kiosk 30"',
      screenSize: '30 inches',
      resolution: '1366 × 768',
      brightness: '200 - 600 cd/m²',
      contrast: '135000:1',
      viewingAngle: '178° (H) / 178° (V)',
      responseTime: '0.1ms',
      colorGamut: '16.7M',
      features: [
        'OLED self-lighting technology for rich color performance',
        'Transparent and light-emitting display',
        'Super high contrast and ultra-high picture quality',
        'Capacitive touch control with Android system',
        'Supports multi-scenario applications',
        'Perfect harmony with the environment',
        'Timely information transmission',
      ],
      applications: [
        'Retail Displays',
        'Corporate Information Kiosks',
        'Interactive Advertising',
        'Exhibition Displays',
      ],
      specifications: {
        'Panel Type': 'OLED',
        'Aspect Ratio': '16:9',
        'Power Supply': 'AC 100 - 240V',
        'Power Consumption': '< 100W',
        'Operating Temperature': '0 ~ 40 °C',
        'Operating Humidity': '20% - 80% RH',
        Dimensions: '606 × 1589.6 mm',
        Weight: '35 kg',
        Lifetime: '30,000 hours',
      },
    },
  ];
  // New Product Versions for Nuera 400HD Series
  const nuera400HDVersions: ProductVersion[] = [
    {
      name: '450HD',
      features: [
        'Large color touch screen',
        'Full UC integration',
        'Executive high-end business phone',
      ],
      applications: ['Enterprise IP Telephony', 'Contact Centers'],
      specifications: {
        'Screen Size': '7 inches',
        Resolution: '800 x 480',
        Connectivity: 'Ethernet, Wi-Fi',
        'Power Supply': 'PoE',
      },
    },
    {
      name: '440HD',
      features: [
        'Integrated dedicated LCD sidecar',
        'Displays contacts and their presence',
        'Advanced mid-range business phone',
      ],
      applications: ['Enterprise IP Telephony', 'Contact Centers'],
      specifications: {
        'Screen Size': '4.3 inches',
        Resolution: '480 x 272',
        Connectivity: 'Ethernet',
        'Power Supply': 'PoE',
      },
    },
    {
      name: '430HD',
      features: [
        '12 programmable speed dial keys',
        'Integrated presence monitoring',
        'Mid-range enterprise phone',
      ],
      applications: ['Enterprise IP Telephony', 'Contact Centers'],
      specifications: {
        'Screen Size': '4.3 inches',
        Resolution: '480 x 272',
        Connectivity: 'Ethernet',
        'Power Supply': 'PoE',
      },
    },
    {
      name: '420HD',
      features: [
        'Low-cost entry-level phone',
        'High voice quality',
        'Sleek and modern design',
      ],
      applications: ['Enterprise IP Telephony', 'Small Businesses'],
      specifications: {
        'Screen Size': '2.8 inches',
        Resolution: '320 x 240',
        Connectivity: 'Ethernet',
        'Power Supply': 'PoE',
      },
    },
    {
      name: '405HD',
      features: ['Cost-effective phone', 'Essential everyday features'],
      applications: ['Enterprise IP Telephony', 'Small Businesses'],
      specifications: {
        'Screen Size': '2.8 inches',
        Resolution: '320 x 240',
        Connectivity: 'Ethernet',
        'Power Supply': 'PoE',
      },
    },
  ];

  // New Product Versions for Nuera Session Border Controllers and Media Gateways
  const nueraSBCVersions: ProductVersion[] = [
    {
      name: 'GX-500/500L',
      features: [
        'Compact, high-performance VoIP connectivity solution',
        'Scales up to 250 concurrent sessions',
        'Connects IP-PBXs to any SIP trunking service provider',
        'Supports up to 30 voice channels in a 1U platform',
      ],
      applications: ['Small Enterprises', 'Branch Office Locations'],
      specifications: {
        'Concurrent Sessions': '250',
        'Voice Channels': '30',
        'Form Factor': '1U',
      },
    },
    {
      name: 'GX-800',
      features: [
        'High-performance VoIP connectivity solution',
        'Scales up to 250 concurrent sessions',
        'Connects IP-PBXs to any SIP trunking service provider',
        'Supports versatile connectivity between TDM and VoIP networks',
      ],
      applications: ['Small Enterprises', 'Branch Office Locations'],
      specifications: {
        'Concurrent Sessions': '250',
        'Voice Channels': '30',
        'Form Factor': '1U',
      },
    },
    {
      name: 'GX-1K',
      features: [
        'Complete connectivity solution for small-to-medium sized enterprises',
        'Scales up to 150 concurrent sessions',
        'Supports up to 192 voice channels in a 1U platform',
      ],
      applications: ['Small-to-Medium Enterprises'],
      specifications: {
        'Concurrent Sessions': '150',
        'Voice Channels': '192',
        'Form Factor': '1U',
      },
    },
    {
      name: 'GX-2K',
      features: [
        'Optimal connectivity for small-to-medium sized enterprises',
        'Supports up to 480 voice channels in a 1U platform',
      ],
      applications: ['Small-to-Medium Enterprises'],
      specifications: {
        'Voice Channels': '480',
        'Form Factor': '1U',
      },
    },
    {
      name: 'GX-2600',
      features: [
        'Mid-range capacity solution for enterprises',
        'Scales up to 600 concurrent sessions',
        'Delivers service assurance and secure connectivity',
      ],
      applications: ['Enterprises', 'Large Organizations', 'Contact Centers'],
      specifications: {
        'Concurrent Sessions': '600',
        'Form Factor': '1U',
      },
    },
    {
      name: 'GX-3100',
      features: [
        'Complete connectivity solution for medium-to-large sized enterprises',
        'Supports up to 64 E1/T1 spans in a 2U platform',
      ],
      applications: [
        'Medium-to-Large Enterprises',
        'Contact Centers',
        'Service Providers',
      ],
      specifications: {
        'E1/T1 Spans': '64',
        'Form Factor': '2U',
      },
    },
    {
      name: 'GX-4K',
      features: [
        'Mid-to-high scale capacity solution for enterprises and service providers',
        'Scales up to 5,000 concurrent sessions',
        'Delivers service assurance and secure connectivity',
      ],
      applications: [
        'Enterprises',
        'Large Organizations',
        'Contact Centers',
        'Data Centers',
      ],
      specifications: {
        'Concurrent Sessions': '5000',
        'Form Factor': '2U',
      },
    },
  ];

  // New Product Versions for Nuera Microsoft UC Products
  const nueraMicrosoftUCVersions: ProductVersion[] = [
    {
      name: 'Session Border Controllers (SBC) and Media Gateways',
      features: [
        'Versatile IP communications platforms',
        'Connect VoIP and TDM networks',
      ],
      applications: ['Enterprise VoIP', 'TDM Integration'],
      specifications: {
        Functionality: 'Connects VoIP and TDM networks',
      },
    },
    {
      name: 'Direct Routing SBCs',
      features: [
        'Seamless connectivity with PSTN and SIP trunks',
        'Controlled migration from Skype for Business to Microsoft Teams',
      ],
      applications: ['PSTN Connectivity', 'Microsoft Teams Integration'],
      specifications: {
        'Migration Support': 'Skype for Business to Microsoft Teams',
      },
    },
    {
      name: '400HD IP Phones',
      features: [
        'Easy-to-use, feature-rich products',
        'Designed for enterprise IP telephony and contact centers',
      ],
      applications: ['Enterprise IP Telephony', 'Contact Centers'],
      specifications: {
        Compatibility: 'Service provider hosted services',
      },
    },
    {
      name: 'One Voice Operations Center (OVOC)',
      features: [
        'Voice network management solution',
        'Combines management of voice network devices and quality monitoring',
      ],
      applications: ['Voice Network Management', 'Quality Monitoring'],
      specifications: {
        Interface: 'Web-based application',
      },
    },
    {
      name: 'Survivable Branch Appliances (SBAs)',
      features: [
        'Enterprise-class integrated CPEs',
        'Ensures access to data and voice services during WAN outages',
      ],
      applications: ['Branch Office Connectivity', 'Disaster Recovery'],
      specifications: {
        Functionality: 'Access to data and voice services during WAN outages',
      },
    },
  ];

  const carrierCoreVersions: ProductVersion[] = [
    {
      name: 'GX-3K',
      features: [
        'High-availability media gateway',
        'Scales up to 2,016 voice channels',
        'Modular 1U platform',
        'Versatile connectivity between TDM and VoIP networks',
      ],
      applications: [
        'Connecting legacy TDM PBX systems to IP networks',
        'Connecting IP-PBXs to the PSTN',
      ],
      specifications: {
        'Voice Channels': 'Up to 2,016',
        'Form Factor': '1U',
        // Add any other relevant specifications
      },
    },
    {
      name: 'GX-4K',
      features: [
        'Mid-to-high scale capacity SBC',
        'Delivers service assurance',
        'Scales up to 5,000 concurrent sessions',
        'Connects service provider SIP trunking to any customer communication solution',
      ],
      applications: [
        'Enterprise and service provider connectivity',
        'On-premises or cloud solutions',
      ],
      specifications: {
        'Concurrent Sessions': 'Up to 5,000',
        // Add any other relevant specifications
      },
    },
    {
      name: 'GX-8K',
      features: [
        'High-availability media gateway',
        'Supports up to 16,000 protected channels',
        '12U platform',
        'Carrier-grade availability for various networks',
      ],
      applications: [
        'Wireline, wireless, cable, broadband access',
        'Fixed mobile convergence networks',
      ],
      specifications: {
        'Voice Channels': 'Up to 16,000',
        'Form Factor': '12U',
        // Add any other relevant specifications
      },
    },
    {
      name: 'GX-9K',
      features: [
        'High capacity SBC for service providers',
        'Delivers service assurance and security',
        'Reliable connectivity between different VoIP networks',
      ],
      applications: [
        'Connecting service provider SIP trunking to customer communication solutions',
        'On-premises or cloud solutions',
      ],
      specifications: {
        'Models Available': 'GX-9K30, GX-9K80',
        // Add any other relevant specifications
      },
    },
  ];

  const networkManagementAppVersions: ProductVersion[] = [
    {
      name: 'One Voice Operations Center (OVOC)',
      features: [
        'Voice network management solution',
        'Combines management of voice network devices and quality of experience monitoring',
        'Single, intuitive web-based application',
        'Holistic approach to network lifecycle management',
        'Simplifies everyday tasks and assists in troubleshooting',
        'Clear GUI design for easy management',
      ],
      applications: [
        'Network lifecycle management',
        'Root cause analysis',
        'Adding new devices to the VoIP network',
        'Initiating bulk software updates',
      ],
      specifications: {
        'User  Interface': 'Web-based',
        'Management Scope':
          'Full lifecycle of network components and user devices',
        // Add any other relevant specifications
      },
    },
  ];

  const analogGatewayVersions: ProductVersion[] = [
    {
      name: 'MP-1xx Series',
      features: [
        'Superior voice technology for connecting legacy telephones, fax machines, and PBX systems',
        'Fully interoperable with leading communications platforms',
        'Supports a wide variety of service provider and enterprise applications',
        'Provides Standalone Survivability (SAS) for small branches',
      ],
      applications: [
        'Connecting analog devices to hosted telephony service',
        'Integrating analog devices like fax machines into IP communications systems',
      ],
      specifications: {
        Ports: 'Varies by model',
        Interoperability: 'Compatible with leading communications platforms',
        // Add any other relevant specifications
      },
    },
    {
      name: 'MP-20x Series',
      features: [
        'Cost-effective, advanced 2 and 4 port ATAs',
        'Connects analog phones, fax machines, and conference speakerphones to IP communications systems',
      ],
      applications: [
        'Connecting various analog devices to IP communications systems',
      ],
      specifications: {
        Ports: '2 or 4',
        // Add any other relevant specifications
      },
    },
    {
      name: 'MP-1288',
      features: [
        'High-density analog media gateway',
        'Cost-effective solution for organizations transitioning to all-IP',
        'Integrates large numbers of analog devices into new infrastructure',
        'Protects investment in analog devices and cabling',
      ],
      applications: [
        'Service providers',
        'Hosted UC operators',
        'Hospitality sector',
        'Large enterprise campuses',
      ],
      specifications: {
        Ports: 'Varies by model',
        Density: 'High-density integration',
        // Add any other relevant specifications
      },
    },
  ];

  // New Product Version for G Reigns
  const gReignsVersions: ProductVersion[] = [
    {
      name: 'REIGN CORE',
      description: 'A compact and portable 5G private network system.',
      partnerDescription:
        'A compact 5G private network system puts all necessary networking equipment into a tiny mobility rack as a suitcase. Users can rapidly and easily deploy a 5G network for demonstration, education, application development, and proof of concept. Our REIGN CORE complies with 3GPP and O-RAN specifications and uses COTS x86 base server to construct a 5G network system including 5GC, BBU, RRU, and L3 switch, powered by G REIGNS CU/DU software.',
      specifications: {
        'Network Mode': 'NR SA, Rel 15',
        'UE Number': 'Max. 30 active / Default 20 active',
        'Cell Power': '250mW, LOS 40m radius for common usage',
        'Ant. MIMO': '4T4R, DL 4 layers, UL 2 layers',
        Bandwidth: '100MHz',
        Band: 'FR1: n79, n78, n77, n48',
        Latency: 'Avg. 20~30 ms',
        Profile: 'DL 700Mbps / UL 120Mbps (Default Profile)',
        OAM: 'Web GUI, CLI',
        'Time Synchronization': 'GPS free',
        Dimension: '565mm x 556mm x 250mm',
      },
      features: [
        'Mobile All-in-One',
        '30 Min. Rapid Setup',
        'Framework to Customizable Solution',
      ],
      applications: [
        'Demonstration',
        'Education',
        'Application Development',
        'Proof of Concept',
      ],
    },
  ];

  // New Product Version for Advanced Network
  const advancedNetworkVersions: ProductVersion[] = [
    {
      name: 'Advanced Network',
      description: 'Provide advanced technique to 5G private network.',
      partnerDescription:
        'G REIGNS experts have over 20 years of experience in the telecom domain. We are familiar with telecommunication protocols and specifications. Moreover, we are capable of providing tailor-made 5G private networks to adopt customer’s various use cases and help enterprises seamlessly complete their 5G digital transformation. Inherited skills and knowledge from parent company HTC, G REIGNS is confident that we can resolve interoperability issues between 5G terminals, networks, and core timely and serve our customers with the highest quality. The customized network complies with 3GPP and O-RAN specifications using COTS x86 base servers. G REIGNS provides software and/or hardware depending on what the customer needs.',
      specifications: {
        'Network Mode': 'NR SA, Rel 15',
        'Max. UE per Cell': 'Max. 256 connected / 128 active',
        Bandwidth: 'Up to 100MHz',
        Band: 'FR1: n79, n78, n77, n48',
        Latency: 'Avg. 20~30 ms',
        Throughput: 'Max. DL 1Gbps, Max. UL 350Mbps',
        Fronthaul: 'Option-7.2',
        Management: 'O1, M-plane',
        'Time Synchronization': 'IEEE 1588v2, GPS',
        'Product Compatibility': 'Compatible with 5GC and O-RU',
        'O-RU': 'Alpha, Benetel, Foxconn, Lions, Liteon, WNC',
        '5GC':
          'Affirmed, Atayalan, Athonet, Cisco, Druid, Ericsson, Metaswitch, NEC, Nokia',
      },
      features: [
        'Time to Market: 5G cloud VR end-to-end solution.',
        'Ready for commercial private 5G network.',
        'Standard Compliance: 5G NR standalone network, simplify structure.',
        'Scalable and Flexible Architecture: Support High Availability, could be bare-metal or container-based.',
        'Hardware scalability according to service levels and user scenarios.',
        'Various cooperating models available, RAN software can be supplied separately.',
      ],
      applications: [
        'Telecommunications',
        'Enterprise 5G Solutions',
        'Digital Transformation',
      ],
    },
  ];
  const polytronvision32versions: ProductVersion[] = [
    {
      name: 'Polytron Vision 32"',
      screenSize: '32 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '400 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Interactive Touch Screen',
        'Multiple Connectivity Options',
        'Slim Design',
        'Built-in Speakers',
      ],
      applications: [
        'Retail Displays',
        'Corporate Presentations',
        'Digital Signage',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports',
        USB: '2 ports',
        'Power Consumption': '≤ 70W',
        Dimensions: '730 × 430 × 50 mm',
        Weight: '8 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];

  const polytronvision43version: ProductVersion[] = [
    {
      name: 'Polytron Vision 43"',
      screenSize: '43 inches',
      resolution: '1920 × 1080 (Full HD)',
      brightness: '450 cd/m²',
      contrast: '1200:1',
      viewingAngle: '178°/178°',
      responseTime: '6ms',
      colorGamut: '16.7M',
      features: [
        'Full HD Resolution',
        'Interactive Touch Screen',
        'Multiple Connectivity Options',
        'Slim Design',
        'Built-in Speakers',
      ],
      applications: [
        'Retail Displays',
        'Corporate Presentations',
        'Digital Signage',
        'Education',
      ],
      specifications: {
        'Panel Type': 'IPS LCD',
        Backlight: 'LED',
        'Aspect Ratio': '16:9',
        'Pixel Pitch': '0.2745mm',
        'Refresh Rate': '60Hz',
        HDMI: '2 ports',
        USB: '2 ports',
        'Power Consumption': '≤ 90W',
        Dimensions: '970 × 570 × 50 mm',
        Weight: '10 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];

  const polytron360version: ProductVersion = [
    {
      name: 'Polytron 360 55"',
      screenSize: '55 inches',
      resolution: '3840 × 2160 (4K UHD)',
      brightness: '600 cd/m²',
      contrast: '1500:1',
      viewingAngle: '178°/178°',
      responseTime: '5ms',
      colorGamut: '1.07B',
      features: [
        '4K UHD Resolution',
        '360-Degree Viewing',
        'Interactive Capabilities',
        'Multiple Connectivity Options',
        'Robust Build Quality',
      ],
      applications: [
        'Exhibitions',
        'Events',
        'Retail Displays',
        'Corporate Presentations',
      ],
      specifications: {
        'Panel Type': 'OLED',
        'Aspect Ratio': '16:9',
        'Refresh Rate': '60Hz',
        HDMI: '3 ports',
        USB: '2 ports',
        'Power Consumption': '≤ 150W',
        Dimensions: '1200 × 700 × 100 mm',
        Weight: '15 kg',
        'Operating Temperature': '0 ~ 50 °C',
        'Operating Humidity': '20% ~ 80% RH',
      },
    },
  ];

  const partners: Partner[] = [
    {
      id: 'boe',
      name: 'BOE',
      logo: 'Boe_Technology_Group_logo.svg.png',
      color: 'from-indigo-500 to-blue-500',
      products: [
        {
          id: 'bky-a',
          name: 'BKY-A Series',
          category: 'Professional Monitors',
          description:
            'High-performance professional monitors designed for demanding applications requiring exceptional color accuracy, reliability, and versatility . ',
          partnerDescription:
            'Ultra-light and ultra-thin: Seamless splicing with a thickness of 29mm and a weight of 4.2 kg:\n • Seamlessly smooth.\n • Dual backup design: Power/signal dual backup.\n • Quick maintenance: Minimalist steel structure for quick detachment.',
          versions: bkyAVersions,
          icon: Monitor,
          color: 'from-blue-500 to-indigo-500',
          image: 'bky-a.png',
        },
        {
          id: 'btq',
          name: 'BTQ Series',
          category: 'MLED Displays',
          description:
            'Advanced MLED display modules featuring high brightness, contrast, and easy maintenance for various indoor applications.',
          partnerDescription:
            'This product uses SMD lamp beads, which are packaged with one red, one green and one blue chip.\n• The lamp beads are soldered on the PCB board through surface mounting technology (SMT).\n• This product is controlled by a computer using a PWM driver IC chip and an integrated row driver chip.\n• The lamp bead and the chip are mounted on the PCB board to form a unit board, and then mounted on the bottom shell to form a module.',
          versions: btqVersions,
          icon: Cpu,
          color: 'from-green-500 to-teal-500',
          image: 'btq.png',
        },
        {
          id: 'btx',
          name: 'BTX-FL Series',
          category: 'Flexible MLED Displays',
          description:
            'Innovative flexible MLED display modules designed for creative and curved installations, offering high refresh rates and magnetic adsorption for easy mounting.',
          partnerDescription:
            'Flexible PCB soft board, the bottom shell are made of superior silicone material.\n  Module adopts high refresh high grayscale IC, more uniform heat dissipation.\n Module adopts 18 pcs strong magnetic adsorption mounting with good flatness.',
          versions: btxVersions,
          icon: Zap,
          color: 'from-purple-500 to-pink-500',
          image: 'btx.png',
        },
        {
          id: 'bty-b',
          name: 'BTY-B Series',
          category: 'Indoor/Outdoor Rental LED Displays',
          description:
            'Lightweight, ultra-thin, and high-precision die-casting aluminum panels with standardized cabinets for fast installation and versatile use in events and stages.',
          partnerDescription:
            'Lightweight, ultra-thin and high-precision die-casting aluminum panel.\n The standardized cabinets are compatible with a wide range of pitches, for fast installation, and the modules are equipped with a variety of features such as  anti-dust accumulation and magnetic fixation.\n Widely used in indoor concerts, hotel stages and so on.',
          versions: btyBVersions,
          icon: Monitor,
          color: 'from-orange-500 to-red-500',
          image: 'bty.png',
        },
        {
          id: 'byb',
          name: 'BYB Series',
          category: 'Outdoor High-End LED Displays',
          description:
            'A series of outdoor LED displays featuring lightweight aluminum bodies, efficient heat dissipation, high brightness, and robust protection (IP65/IP66) for various outdoor applications, including energy-saving Pro models.',
          partnerDescription:
            'The panel is silver in color, fashionable and beautiful, with good texture, a sense of luxury, and strong lines.\n  Aluminum body, efficient heat dissipation, stable running.\n  Lightweight design, ≤ 25KG/m 2, easy to handle, low transportation andinstallation costs, saving steel structures.\n  Good protective performance. The protection level is IP65, which can prevent rainstorm, typhoon and salt fog.\n  No need for air conditioning, saving equipment costs and electricity bills. \n It can be installed without any other protection, beautiful and convenient. \n Multiple panel sizes available, including 640x640, 480x640, 960x640 and more.\n It can achieve various irregular shapes such as curve screen, glasses-free 3D and seamless right angle splicing.',
          versions: bybVersions,
          icon: CheckCircle, // Using CheckCircle for high-end/certified products
          color: 'from-blue-700 to-cyan-500', // New color for BYB series
          image: 'byb.png',
        },
        {
          id: 'byh',
          name: 'BYH Series',
          category: 'Indoor Fine Pitch LED Displays',
          description:
            'High-performance indoor LED display modules with full flip chip package, modular design, and magnetic suction structure for easy installation and maintenance, offering excellent luminous uniformity and high contrast.',
          partnerDescription:
            'Full flip chips package.\n • Driven by cross flow,excellent luminous uniformity,low power consumption.\n High Contrast.\n Light weight, easy to install and disassemble.',
          versions: byhVersions,
          icon: Monitor, // You can choose a more specific icon if available, or create a custom one
          color: 'from-yellow-500 to-orange-500', // A new color for BYH series
          image: 'byh.jpg',
        },
        {
          id: 'all-in-one',
          name: 'All In One Series',
          category: 'Integrated LED Displays',
          description:
            'Integrated LED display solutions featuring standard 2K resolution, ultra-thin design, high color saturation, and comprehensive smart functionalities for various indoor applications.',
          partnerDescription:
            '1 Standard 2K resolution high-definition picture, cabinet ultra-thin 35mm design, more than 97% color saturation, 8 levels of brightness adjustable.\n High hardware configuration: Android 8.0 system + Windows (optional), 4G RAM + 32G storage (expandable).\n Support wireless screen casting, multi-screen network interaction, one screen with multiple displays.\n Support remote control, cell phone, tablet and other intelligent terminal remote control operation. \n High interface compatibility: USB, HDMI input and output, RJ45 network port, infrared remote control, etc., supporting Wi-Fi, Bluetooth, 4G network, Ethernet  and multiple network transmission methods.',
          versions: allInOneVersions,
          icon: Monitor, // Using Monitor icon for integrated displays
          color: 'from-green-600 to-blue-600', // A new color for All In One series
          image: 'allseries.png',
        },
        // New Products Added Below
        {
          id: 'bts',
          name: 'BTS Series',
          category: 'Outdoor Channel LED Displays',
          description:
            'Robust outdoor LED displays designed for high-temperature environments, offering high flame retardancy, strong weather resistance, and energy efficiency through common cathode technology.',
          partnerDescription:
            'Huge Power saving.\n High Flame Retardant Materials.\n Intensive Protection: LED beads sealed with specialized glue to ensure effective heat dissipation and strong weather resistance. \n High Brightness & Wide Viewing Angles.\n ≥240hrs reliability test, lasting ≤75°C IC temperature.',
          versions: btsVersions,
          icon: Zap, // Using Zap for outdoor/power-related features
          color: 'from-red-500 to-orange-500', // New color for BTS series
          image: 'bts.png',
        },
        {
          id: 'bsl-outdoor',
          name: 'BSL Outdoor Series',
          category: 'Outdoor Rental LED Displays',
          description:
            'Lightweight and ultra-thin outdoor rental LED displays with die-casting aluminum cabinets, full front maintenance, and support for creative splicing options like right-angle and naked eye 3D.',
          partnerDescription:
            'The cabinet adopts die-casting aluminum design, module without bottom shell, the thickness of the whole cabinet is only 45mm, the single cabinet weighs 12kg.\n Module, HUB, power supply can be full front maintenance, can be installed  against the wall, the back of the screen body does not need to be reserved for maintenance channel, maintenance is faster and more convenient.\n Easy to install the box assembly using rotary fast latch connection, easy to operate, fast assembly, only one person can complete, saving labor costs.\n Creative wireless module using hard connection design program, gold-plated connectors antioxidant, between the box also uses any internal routing, simple appearance, no wire splicing of the screen visual effects.\n  Seamless splicing die-casting molding process, the use of high-precision CNC machining, processing precision, easy to achieve seamless splicing, perfect realization of ultra-high flatness. \n Support right-angle splicing with BSL-I series box, meet the application scenarios of column screen, magic square screen, naked eye 3D, etc.',
          versions: bslOutdoorVersions,
          icon: Monitor, // Using Monitor for display products
          color: 'from-teal-500 to-green-500', // New color for BSL Outdoor series
          image: 'outdoorseries.png',
        },
        {
          id: 'led-poster-screen',
          name: 'LED Poster Screen',
          category: 'Digital Poster Displays',
          description:
            'Ultra-thin and lightweight LED poster screens with versatile installation methods, high precision, and easy operation, ideal for digital signage and advertising.',
          partnerDescription:
            'The product can be installed before and after the design.\n The box thin design, ultra-thin lightweight, border 47mm thickness, weight 38.5KG, installation, movement of light and fast.\n Landscape and portrait ,wall-mounted, diagonal support, and other mounting methods can be selected.\n The screen body is ready to plug in and use, easy to operate.\n The aluminum frame material CNC machining, high precision.\n The metal conduction of the heat dissipation, flatness and silent operation.\n The large viewing angle, high brush, high gray, high contrast. Single IFI/HDMI/network cable connection operation, mobile APP and PC rapid  release, editing material.\n One-to-many LAN centralized release and Internet remote release. 10.Calibration data stored in the module with 5s restoration of calibration data.',
          versions: ledPosterScreenVersions,
          icon: CheckCircle, // Using CheckCircle for a complete, ready-to-use product
          color: 'from-blue-400 to-cyan-400', // New color for LED Poster Screen
          image: 'led poster.png',
        },
        {
          id: 'btr',
          name: 'BTR Series',
          category: 'Cinema LED Displays',
          description:
            'High-resolution cinema LED displays offering superb contrast, vivid details, realistic color reproduction, and ultra-bright dynamic range, designed to enhance the cinematic experience and support multi-business uses.',
          versions: btrVersions,
          icon: Monitor, // Using Monitor for display products, specifically cinema
          color: 'from-gray-700 to-gray-900', // New color for BTR series (cinema-like dark tones)
          image: 'btr.png',
        },
      ],
    },
    {
      id: 'ai-la',
      name: 'AI-LA',
      logo: 'Untitled-3 copy.png',
      color: 'from-purple-600 to-indigo-600', // Different gradient for brand distinction
      products: [
        {
          id: 'qm22-a',
          name: 'Square Display',
          category: 'Professional Monitors',
          description:
            'Premium monitor series offering both standard and professional versions with excellent color accuracy and versatile connectivity options.',
          partnerDescription:
            'ADS Panel Technology.\n • 1920 × 1920 Resolution\n • 500nits Brightness\n • Android 7.1\n • Quad-Core SoC\n • Slim Design\n• Full Metal Shell',
          versions: qm22aVersions,
          icon: Monitor,
          color: 'from-indigo-400 to-purple-500',
          image: qm22a,
        },

        {
          id: 'fe-series',
          name: ' Free Standing kiosks',
          category: 'Professional Displays',
          description:
            'Versatile display series featuring Full HD resolution, Android OS, and built-in speakers for various applications.',
          partnerDescription:
            '• FHD Resolution \n • 350nits\n  • Android So\n • Tempered glass protection\n • Easy maintenance\n • Built-In Speaker',
          versions: [
            ...feSeriesVersions,
            ...srSeriesVersions,
            ...flSeriesVersions,
            ...fpSeriesVersions,
          ],
          icon: Monitor,
          color: 'from-green-400 to-blue-500', // Choose a gradient color for FE Series
          image: srseries,
        },
        {
          id: 'androiddigital43',
          name: ' Digital Signage',
          category: 'Digital Signage',
          description:
            ' Full HD display with Android OS, designed for versatile applications in retail and corporate environments.',
          partnerDescription:
            'FHD Resolution\n • 300nits\n • 7 × 16 Operation\n • Android 9.0\n •ARM Quad-Core Cortex A53\n • Built-In Speaker\n • Slim and light Design\n • Landscape & Portrait Installation support',
          versions: androiddigital43Versions,
          icon: Monitor,
          color: 'from-blue-500 to-teal-500', // Choose a gradient color for RS43AM
          image: androidsoc,
        },
        {
          id: 'Videowall ',
          name: 'Video Wall',
          category: 'Video Walls',
          description:
            'Professional video wall displays with slim bezels, high brightness, and 7x24 operation for demanding environments.',
          partnerDescription:
            '• ADSDS Technology\n • FHD Resolution\n • 700nits 500nits\n • 7 × 24 Operation\n • 25% Haze, 3H\n  • 50000H Operation Time\n  • Auto Gamma and Color Calibration\n • 3.5mm Slim Bezel\n • RS232 Control\n • Landscape & Portrait Installation Support\n • VESA Mounting Interface',
          versions: vwSeriesVersions,
          icon: Monitor, // Assuming 'Monitor' icon is suitable for video walls
          color: 'from-cyan-500 to-blue-600', // Choose a suitable gradient color for VW Series
          image: vwseries,
        },
        {
          id: 'roundscreen',
          name: 'Round Screen',
          category: 'Professional Displays',
          description:
            '32-inch Full HD display with ultra-slim design and multiple connectivity options, ideal for various applications.',
          partnerDescription:
            'ADS Panel Technology\n • 1280×1280 Resolution\n • 1500nits Brightness\n • Slim Design\n • Full Metal Shell\n • Support HDMI/VGA in',
          versions: bm326AVersions,
          icon: Monitor,
          color: 'from-purple-600 to-indigo-600', // Choose a gradient color for BM326A
          image: bm23,
        },
        {
          id: 'fscfp',
          name: 'UHD High Brightness Fan Cooling Outdoor',
          category: 'Outdoor Displays',
          description:
            'High brightness outdoor display series with advanced features for various applications.',
          partnerDescription:
            'UHD Resolution with High Brightness (55” for FHD)\n • Blackening Effect Free (Tni 105°C)\n   • Visible with Polarized Sunglasses (QWP Front Pol.) 86” not available\n  • IP55 standard with Thunder and Corrosion Proof\n • AR Tempered Glass and Fan Cooling System\n • Ambient Light Sensor for Auto Brightness Adjustment\n • Internal Temperature Sensor',
          versions: fscfpVersions,
          icon: Monitor,
          color: 'from-blue-600 to-green-600', // Choose a gradient color for FSCFP
          image: brightness,
        },
        {
          id: 'ascw',
          name: 'High Brightness Air-conditioner Cooling Outdoor',
          category: 'Outdoor Displays',
          description:
            'High brightness outdoor display series with advanced features for various applications.',
          partnerDescription:
            'UHD Resolution with High Brightness (49” for FHD)\n • Blackening Effect Free (Tni 105°C)\n • Visible with Polarized Sunglasses (QWP Front Pol.)\n • IP65 standard with Thunder and Corrosion Proof\n • AR Tempered Glass and Air Conditioning Cooling System\n • Ambient Light Sensor for Auto Brightness Adjustment\n  • Internal Temperature Sensor',
          versions: ascwVersions,
          icon: Monitor,
          color: 'from-blue-600 to-green-600', // Choose a gradient color for ASCW
          image: ac,
        },
        {
          id: 'ir-interactive',
          name: ' Interactive Pro Flat Displays',
          category: 'Interactive Displays',
          description:
            'High-performance interactive display series with UHD resolution and advanced features for education and corporate use.',
          partnerDescription:
            'UHD Resolution with 350nits\n • Powerful Octa-core CPU and Quad-core GPU\n  • Zero Bonding Technology\n • Slim Design with Android 12.0\n  • Wireless Screen for Portable Devices\n  • Built-In Camera and Microphone (optional)\n  • Powerful Interactive Board Software\n  • OCR Function for Smart Handwriting Recognition\n • Infrared Touch Technology\n • OPS Slot Available',
          versions: irInteractiveVersions,
          icon: Monitor,
          color: 'from-purple-600 to-indigo-600', // Choose a gradient color for IR Interactive
          image: flatdisplay,
        },
        {
          id: 'touch-transparent-kiosk',
          name: 'Touch Transparent OLED Kiosk',
          category: 'Interactive Displays',
          description:
            '30-inch touch transparent OLED kiosk with advanced features for retail and corporate applications.',
          partnerDescription:
            'OLED self-lighting technology, rich and gorgeous color performance.\n Transparent and light-emitting, perfect picture quality effect display.\n Super high contrast, ultra high picture hierarchy sense, black pure, bright brilliant.\n Level speed refresh rate, screen without delay, healthy eye protection.\n No backlight, no seepage leakage phenomenon.\n Support for a 178° ultra-wide viewing angle.\n Support capacitive touch control and android system, support multi-scenario application.\n Transparent and better combined with virtual display, more sense of science and technology, perfect harmony with the environment, timely information transmission.',
          versions: touchTransparentKioskVersions,
          icon: Monitor,
          color: 'from-purple-600 to-indigo-600', // Choose a gradient color for Touch Transparent Kiosk
          image: 'oledkiosk2.png',
        },
      ],
    },
    {
      id: 'property-automate',
      name: 'Property Automate',
      logo: 'automate.png', // Add the logo for Property Automate
      color: 'from-green-400 to-teal-500', // Choose a color gradient
      products: [
        {
          id: 'leasegoto',
          name: 'LeaseGOTO',
          category: 'Lease Management Software',
          description:
            'LeaseGOTO is designed to simplify and streamline your leasing processes. It provides a comprehensive solution for managing leases efficiently, ensuring all aspects of lease management are handled with ease and precision.',
          versions: [
            {
              name: 'LeaseGOTO',
              features: [
                'CRM',
                'Agreements',
                'Lead tracking',
                'Lease management',
                'Contract management',
                'Work order management',
                'Accounts management',
              ],
              applications: [
                'Residential',
                'Commercial',
                'Senior Living',
                'Enterprises',
                'Institutions',
                'Coworking',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use the existing icon or create a custom one
          color: 'from-green-500 to-cyan-500', // Color for the product
          image: 'leasegoto.png',
        },
        {
          id: 'facilities-goto',
          name: 'FacilitiesGOTO',
          category: 'CAFM Software',
          description:
            'FacilitiesGOTO offers a robust platform for overseeing all facility management tasks. It helps you maintain a smooth operation, ensuring that your facilities are well-managed and running efficiently.',
          versions: [
            {
              name: 'FacilitiesGOTO',
              features: [
                'Facility & asset management',
                'Vendor coordination',
                'Maintenance tracking',
                'Inspection management',
              ],
              applications: [
                'Residential',
                'Commercial',
                'Govt. & Public Sector',
                'Senior Living',
                'Enterprises',
                'Institutions',
              ],
              specifications: {
                // Add any specifications here if required
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-500 to-teal-500', // Choose a gradient color
          image: 'facilitiesgoto.png',
        },
        {
          id: 'realtygoto',
          name: 'RealtyGOTO',
          category: 'Real Estate Sales Management',
          description:
            'RealtyGOTO is built to streamline real estate sales, from managing leads to closing deals. Designed for property developers and sales teams, it simplifies off-plan sales, contract management, and client interactions for a seamless sales process.',
          versions: [
            {
              name: 'RealtyGOTO',
              features: [
                'Sales CRM',
                'Lead tracking and management',
                'Off-plan sales management',
                'Contract and document management',
                'KYC verification',
                'Contact management',
                'Property administration',
              ],
              applications: ['Residential', 'Commercial'],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-500 to-teal-500', // Choose a gradient color for RealtyGOTO
          image: 'realtygoto.png',
        },
        // New Product for Property Automate: BrokerGOTO
        {
          id: 'brokergoto',
          name: 'BrokerGOTO',
          category: 'Real Estate Brokerage Management',
          description:
            'BrokerGOTO is built to streamline real estate brokerage operations, helping brokers and agencies manage property sales, client interactions, and commissions efficiently. It simplifies listing management, lead tracking, and deal closures for better productivity.',
          versions: [
            {
              name: 'BrokerGOTO',
              features: [
                'CRM',
                'Payout tracking',
                'Contacts Management',
                'Property Administration',
                'Performance analytics & reporting',
                'Lead distribution & assignment',
                'Agreement Management',
                'Contract Management',
                'Property listings',
              ],
              applications: [
                'Residential',
                'Commercial',
                'Luxury Real Estate',
                'Institutions',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use the existing icon or create a custom one
          color: 'from-green-500 to-teal-500', // Color for the product
          image: 'brokergoto.png',
        },

        {
          id: 'communitygoto',
          name: 'CommunityGOTO',
          category: 'Community Management Software',
          description:
            'CommunityGOTO is tailored to enhance the management of residential communities. It helps community managers and residents stay connected and ensures that community operations are seamless and effective.',
          versions: [
            {
              name: 'CommunityGOTO',
              features: [
                'Community management',
                'Manage resident information',
                'Amenities booking',
                'Handle inspections',
                'Maintenance tracking',
                'Visitor, parking and security',
                'Communication',
              ],
              applications: ['Residential', 'Communities', 'Senior Living'],
              specifications: {
                // Include any relevant specifications if needed
              },
            },
          ],
          icon: Monitor, // Use the existing icon or create a custom one
          color: 'from-green-500 to-teal-500', // Color for the product
          image: 'communitygoto.png',
        },
        {
          id: 'coworkgoto',
          name: 'CoworkGOTO',
          category: 'Coworking Management Software',
          description:
            'CoworkGOTO is built for managing coworking spaces. It provides the tools needed to create an engaging and productive environment for members, ensuring that all aspects of coworking management are covered.',
          versions: [
            {
              name: 'CoworkGOTO',
              features: [
                'Coworking operations management',
                'CRM, onboarding, billing automation',
                'Member management',
                'Amenities booking',
                'Maintenance & inspections',
                'Visitor, parking, and security',
              ],
              applications: ['Coworking', 'Commercial', 'Enterprises'],
              specifications: {
                // (You can add specifications if applicable)
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-500 to-teal-500', // Choose a gradient color for the product
          image: 'coworkgoto.png',
        },
        {
          id: 'workplacegoto',
          name: 'WorkplaceGOTO',
          category: 'Workplace Management Software',
          description:
            'WorkplaceGOTO is an all-encompassing solution for managing office environments. It assists in optimizing workplace operations, making it easier to manage office resources, employee needs, and administrative tasks.',
          versions: [
            {
              name: 'WorkplaceGOTO',
              features: [
                'Workplace management',
                'Employee onboarding, self-services',
                'Attendance tracking',
                'Facilities booking',
                'Service management',
                'Project & task management',
              ],
              applications: [
                'Commercial',
                'Coworking',
                'Enterprises',
                'Institutions',
              ],
              specifications: {},
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-500 to-teal-500', // Choose a gradient color for the product
          image: 'workplacegoto.png',
        },
        {
          id: 'propgoto',
          name: 'propGOTO',
          category: 'Property Management Software',
          description:
            'propGOTO Smart is an all-in-one property management solution designed for individual landlords and small portfolio owners. Manage your rental units with ease, efficiency, and professionalism all from a single platform.',
          versions: [
            {
              name: 'propGOTO',
              features: [
                'Property & unit management',
                'Lease & contract management',
                'Service request tracking',
                'KYC & document management',
                'Invoicing and receipts',
                'Occupancy and revenue reports',
                'Communication tools',
                'Tenant & Inspector Apps',
              ],
              applications: [
                'Individual Landlords',
                'Small Portfolio Owners',
                'Property Agents',
                'Independent Property Managers',
              ],
              specifications: {},
            },
          ],
          icon: Monitor,
          color: 'from-green-500 to-teal-500',
          image: 'propgoto smart.png',
        },
        {
          id: 'townshipgoto',
          name: 'TownshipGOTO',
          category: 'Township Management Software',
          description:
            'TownshipGOTO is built to streamline the complex operations of industrial and residential townships. From resident management and utility billing to facility maintenance and vendor coordination, it provides a unified platform for efficient and transparent township operations.',
          versions: [
            {
              name: 'TownshipGOTO',
              features: [
                'Community & Resident Management',
                'Move-in / Move-out',
                'Facility & Work Order Management',
                'Utility Billing',
                'Property Administration',
                'KYC & Document Management',
                'Visitor & Parking Control',
                'Amenity & Space Booking',
              ],
              applications: [
                'Industrial Townships',
                'Residential Colonies',
                'Government Housing',
                'Smart Cities',
                'Special Economic Zones',
                'Staff Housing',
                'Mixed-Use Communities',
              ],
              specifications: {},
            },
          ],
          icon: Monitor,
          color: 'from-green-500 to-teal-500',
          image: 'townshipgoto.png',
        },
      ],
    },
    {
      id: 'htc-vive',
      name: 'HTC VIVE',
      logo: 'Vive-logo.png', // Provide the appropriate logo file
      color: 'from-blue-600 to-purple-600', // Choose a color gradient for HTC VIVE
      products: [
        {
          id: 'vive-focus-3',
          name: 'HTC VIVE FOCUS 3',
          category: 'VR Headsets',
          description:
            'Bridge distance with seamless remote collaboration. Visualize all things creative. Learn and train with unprecedented efficiency. Introducing the all-in-one VIVE Focus 3. Delivering best-in-class graphics, ergonomic comfort, and applications that will transform the way you work.',
          versions: [
            {
              name: 'HTC VIVE FOCUS 3',
              features: [
                'All-in-one design',
                'Best-in-class graphics',
                'Ergonomic comfort',
                'Seamless remote collaboration',
                'High efficiency for learning and training',
              ],
              applications: [
                'Remote collaboration',
                'Training',
                'Education',
                'Creative applications',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon or create a custom one
          color: 'from-blue-600 to-purple-600', // Matching color gradient for the product
          image: 'focus3.png', // Provide the appropriate image file
        },
        {
          id: 'vive-flow',
          name: 'HTC VIVE FLOW',
          category: 'VR Glasses',
          description:
            'The immersive VR glasses made for wellness and mindful productivity. Compact and lightweight, the VIVE Flow goes where you go.',
          versions: [
            {
              name: 'HTC VIVE FLOW',
              features: [
                'Easy phone pairing via Bluetooth',
                'Adjustable diopter lenses for personalized focusing power',
                'Comfortable dual-hinge design for various head shapes',
              ],
              applications: [
                'Wellness',
                'Mindfulness',
                'Virtual reality experiences',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-blue-600 to-purple-600', // Matching color gradient for the product
          image: 'flow.png', // Provide the appropriate image file
        },
        {
          id: 'vive-pro',
          name: 'HTC VIVE PRO',
          category: 'VR Headsets',
          description:
            'True-to-life precision room-scale tracking. Ultra-vibrant screen colours. Incredibly high contrast and uber-realistic sounds. VIVE Pro is engineered for professional-grade VR.',
          versions: [
            {
              name: 'HTC VIVE PRO',
              features: [
                'Hi-Res Headset + 3D Spatial Audio',
                'Optimised Ergonomics for Exceptional Comfort',
                'Latest SteamVR Tracking System',
                'Wireless Powered by Intel® WiGig',
              ],
              applications: [
                'Professional VR experiences',
                'Game development',
                'Design visualization',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-blue-600 to-purple-600', // Matching color gradient for the product
          image: 'pro.png', // Provide the appropriate image file
        },
        {
          id: 'vive-pro-2',
          name: 'HTC VIVE PRO 2',
          category: 'VR Headsets',
          description:
            'Next-level graphics and sound for riveting PC-VR. Purposeful and pragmatic ergonomics delivers smooth and comfortable immersion. Introducing the VIVE Pro 2. Upgrade your headset setup with the highly anticipated sequel to the award-winning VIVE Pro series.',
          versions: [
            {
              name: 'HTC VIVE PRO 2',
              features: [
                'Next-level graphics',
                'Immersive sound experience',
                'Ergonomic design for comfort',
                'Enhanced VR performance for PC',
              ],
              applications: [
                'PC-VR experiences',
                'Gaming',
                'Virtual reality training',
                'Professional applications',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-blue-600 to-purple-600',
          image: 'pro2.png', // Provide the appropriate image file
        },
      ],
    },
    {
      id: 'tele-presenz',
      name: 'Telepresenz',
      logo: 'tele.png.png',
      color: 'from-green-600 to-blue-600',
      products: [
        {
          id: 'smart-ops',
          name: 'SmartOPS',
          category: 'Digital Workflow Solutions',
          description: 'Step by Step Workflows Made Easy with Telepresenz®.',
          versions: [
            {
              name: 'SmartOPS',
              features: [
                'Seamless integration for maximum efficiency',
                'Instant access to crucial information',
                'Real-time data reporting',
                'Intuitive real-time dashboards and analytics',
                'Remote expert guidance using AR',
              ],
              applications: [
                'Operational efficiency',
                'Incident management',
                'Data reporting',
                'Guided troubleshooting',
                'Team collaboration',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-600 to-blue-600',
          image: 'smartops.png',
        },
        {
          id: 'smart-itm',
          name: 'Smart ITM',
          category: 'Digital Workflow Solutions',
          description:
            'Capture Live Content & Tribal Knowledge as Workflows with Smart ITM.',
          versions: [
            {
              name: 'Smart ITM',
              features: [
                'Knowledge Capture: Record live content for accurate instructions.',
                'Multimedia Integration: Capture photos, videos, and audio in workflows.',
                'Ease of Use: User-friendly tools for job documentation.',
                'Field-to-Office Connectivity: Convert observations into workflows seamlessly.',
                'Template Library: Fast format standardization for procedures.',
                'Instant Updates: Automatic distribution of new workflows.',
              ],
              applications: [
                'Knowledge management',
                'Training and upskilling',
                'Operational continuity',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-600 to-blue-600',
          image: 'smmart itm.png',
        },
        {
          id: 'smart-eye',
          name: 'Smart Eye',
          category: 'AI Powered Safety Solution',
          description:
            'Ensure compliance with personal protective equipment requirements using AI and computer vision.',
          versions: [
            {
              name: 'Smart Eye',
              features: [
                'Advanced PPE kit detection capabilities for compliance monitoring.',
                'Real-time alerts for non-compliance issues.',
                'Management of safe zones to protect workers from hazards.',
                'Continuous monitoring of lone workers for safety.',
                'Comprehensive incident management system for quick response.',
                'Efficient emergency response and alert system.',
                'Hazard and risk management with real-time monitoring.',
                'Detection of man-down situations for immediate assistance.',
                'Machine equipment safety monitoring to ensure operational standards.',
                'Training management system for optimized training protocols.',
                'Custom control room dashboards for real-time visibility.',
                'Instant notifications and alerts for critical incidents.',
                'End-to-end incident management and corrective action tracking.',
                'Detailed reporting for audits and root cause analysis.',
              ],
              applications: [
                'Worksite safety compliance',
                'Emergency response management',
                'Hazard detection and risk management',
                'Training and safety optimization',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-green-600 to-blue-600',
          image: 'smarteye.png', // Use an appropriate image filename
        },
      ],
    },
    {
      id: 'vview',
      name: 'VView',
      logo: 'vview.png', // Add the appropriate logo file
      color: 'from-blue-500 to-green-500',
      products: [
        {
          id: 'vview-platform',
          name: 'VView Platform',
          category: 'AV Management Solutions',
          description:
            'Simplifying the complexity of AV management with one unified platform.',
          versions: [
            {
              name: 'VView',
              features: [
                'Desktop & Mobile Device Access on Windows, Mac, Android & iOS',
                'Browser Based & Secure with TLS/SSL encryption',
                'Multi-Platform & Multilingual support',
                'Compatible with any AV infrastructure',
                'Enterprise Ready with Active Directory Integration',
                'Dynamic Licensing for scaling needs',
                'Manage multiple video walls with a single instance',
                'Virtual Wall support for independent control',
                'Stream to user devices and cloud CDNs',
                'VMS & CMS Support for content management',
                'Operational Dashboard for monitoring and analysis',
                'OpenAPI Support for integrations with legacy systems',
              ],
              applications: [
                'AV Management',
                'Content Capture and Distribution',
                'Facility Monitoring and Optimization',
                'Training and Education',
              ],
              specifications: {
                // Include specifications if needed
              },
            },
          ],
          icon: Monitor, // Use an appropriate icon
          color: 'from-blue-500 to-green-500',
          image: 'techvview.png', // Add the appropriate image file
        },
      ],
    },
    {
      id: 'Nuera Commuincations',
      name: 'Nuera Communications',
      logo: 'nuera copy.png',
      color: 'from-blue-600 to-purple-600',
      products: [
        {
          id: 'nuera-400hd',
          name: 'Nuera 400HD Series',
          category: 'IP Phones',
          description:
            'The Nuera 400HD series of IP phones is a range of easy-to-use, feature-rich products for service provider hosted services, enterprise IP telephony, and contact center markets.',
          partnerDescription:
            'Nuera IP phones are designed to work together with Nuera management tools, defining the IP phone as an IT-managed entity for the unique and complete lifecycle management of end-user desktop devices.',
          versions: nuera400HDVersions,
          icon: Monitor, // Use an appropriate icon
          color: 'from-blue-600 to-teal-600', // Choose a gradient color for Nuera IP Phones
          image: '400hd.png', // Add an image for the Nuera 400HD series
        },
        {
          id: 'nuera-sbc',
          name: 'Border Controllers and Media Gateways',
          category: 'SBCs and Media Gateways',
          description:
            'Nuera’s session border controllers (SBCs) and media gateways are versatile IP communications platforms that connect VoIP and TDM networks.',
          partnerDescription:
            'SBCs are deployed at the border between the enterprise and the service provider, providing security and protocol normalization. Media gateways connect legacy telephones and PBX systems with IP telephony networks.',
          versions: nueraSBCVersions,
          icon: Cpu, // Use an appropriate icon
          color: 'from-green-600 to-blue-600', // Choose a gradient color for SBCs and Media Gateways
          image: 'media.png', // Add an image for the SBCs and Media Gateways
        },
        {
          id: 'microsoft-uc',
          name: 'Microsoft UC Products',
          category: 'Unified Communications',
          description:
            'Nuera offers a comprehensive suite of solutions designed to simplify and accelerate voice-enablement of Microsoft Teams and Skype for Business implementations.',
          partnerDescription:
            'These products include SBCs, media gateways, Direct Routing SBCs, One Voice Operations Center (OVOC), and Survivable Branch Appliances (SBAs).',
          versions: nueraMicrosoftUCVersions,
          icon: Monitor, // Use an appropriate icon
          color: 'from-purple-600 to-indigo-600', // Choose a gradient color for Microsoft UC Products
          image: 'uc.png', // Add an image for Microsoft UC Products
        },
        {
          id: 'carrier-core',
          name: 'Carrier Core',
          category: 'Media Gateways and SBCs',
          description:
            'For service provider core networks, Nuera offers a range of secure, reliable and highly scalable session border controllers and media gateways for seamless interconnectivity, carrier-grade reliability and high voice quality.',
          partnerDescription:
            'The Nuera GX-3K high-availability media gateway scales up to 2,016 voice channels in a modular 1U platform to enable versatile connectivity between TDM and VoIP networks, such as connecting legacy TDM PBX systems to IP networks and IP-PBXs to the PSTN.',
          versions: carrierCoreVersions,
          icon: Monitor,
          color: 'from-purple-600 to-indigo-600',
          image: 'carriercore.png', // Add an appropriate image for the Carrier Core product
        },
        {
          id: 'network-management',
          name: 'Network Management Application',
          category: 'Network Management Solutions',
          description:
            'Nuera’s One Voice Operations Center (OVOC) is a voice network management solution that combines management of voice network devices and quality of experience monitoring into a single, intuitive web-based application.',
          partnerDescription:
            'OVOC enables administrators to adopt a holistic approach to network lifecycle management by simplifying everyday tasks and assisting in troubleshooting all the way from detection to correction.',
          versions: networkManagementAppVersions,
          icon: Monitor,
          color: 'from-teal-600 to-blue-600',
          image: 'network.png', // Add an appropriate image for the Network Management Application
        },
        {
          id: 'analog-gateway',
          name: 'Analog Gateway Series',
          category: 'VoIP Gateways',
          description:
            'Nuera’s MP-1xx series of analog VoIP gateways offer superior voice technology for connecting legacy telephones, fax machines, and PBX systems with IP telephony networks and IP-PBX systems.',
          partnerDescription:
            'The MP-1xx gateways provide Standalone Survivability (SAS) for small branches when there is no IP connection between the branch location and the central IP communications system.',
          versions: analogGatewayVersions,
          icon: Monitor,
          color: 'from-green-600 to-teal-600',
          image: 'analog.png', // Add an appropriate image for the Analog Gateway product
        },
      ],
    },
    {
      id: 'g-reigns',
      name: 'G Reigns',
      logo: 'greigns.png', // Add the logo for G Reigns
      color: 'from-green-500 to-teal-500', // Choose a color gradient for G Reigns
      products: [
        {
          id: 'reign-core',
          name: 'REIGN CORE',
          category: '5G Private Network',
          description: 'A compact and portable 5G private network system.',
          partnerDescription:
            'A compact 5G private network system puts all necessary networking equipment into a tiny mobility rack as a suitcase.\n  Users can rapidly and easily deploy a 5G network for demonstration, education, application development, and proof of concept.\n Our REIGN CORE complies with 3GPP and O-RAN specifications and uses COTS x86 base server to construct a 5G network system including 5GC, BBU, RRU, and L3 switch, powered by G REIGNS CU/DU software.',
          versions: gReignsVersions,
          icon: PlugZap2Icon, // Use an appropriate icon
          color: 'from-purple-500 to-teal-500', // Choose a gradient color for REIGN CORE
          image: 'core.png', // Add an image for REIGN CORE
        },
        {
          id: 'advanced-network',
          name: 'Advanced Network',
          category: '5G Private Network',
          description: 'Provide advanced technique to 5G private network.',
          partnerDescription:
            'G REIGNS experts have over 20 years of experience in the telecom domain. We are familiar with telecommunication protocols and specifications. Moreover, we are capable of providing tailor-made 5G private networks to adopt customer’s various use cases and help enterprises seamlessly complete their 5G digital transformation. \n Inherited skills and knowledge from parent company HTC, G REIGNS is confident that we can resolve interoperability issues between 5G terminals, networks, and core timely and serve our customers with the highest quality. \n The customized network complies with 3GPP and O-RAN specifications using COTS x86 base servers.\n  G REIGNS provides software and/or hardware depending on what the customer needs.',
          versions: advancedNetworkVersions,
          icon: Network, // Use an appropriate icon
          color: 'from-blue-500 to-indigo-500', // Choose a gradient color for Advanced Network
          image: 'advancednetwork.png', // Add an image for Advanced Network
        },
      ],
    },
    {
      id: 'Polytron',
      name: 'Polytron',
      logo: 'polytron copy.png',
      color: 'from-orange-600 to-red-600',
      products: [
        {
          id: 'Polytron Vision 32"',
          name: 'Polytron Vision ',
          category: 'Smart Displays',
          description:
            'Polytron Vision is an advanced smart display solution designed for interactive experiences in retail and corporate environments.',
          partnerDescription:
            'Featuring high-resolution displays with touch capabilities, Polytron Vision integrates seamlessly with various applications for enhanced user engagement.',
          versions: [...polytronvision32versions, ...polytronvision43version],
          icon: GlassesIcon, // Use an appropriate icon
          color: 'from-orange-600 to-red-600',
          image: 'polytron copy.png',
        },
        {
          id: 'Polytron 360',
          name: 'Polytron 360 ',
          category: '360-Degree Displays',
          description:
            'Polytron 360 offers immersive 360-degree viewing experiences, perfect for exhibitions and events.',
          partnerDescription:
            'With advanced display technology, Polytron 360 creates stunning visuals that captivate audiences and enhance engagement.',
          versions: polytron360version,
          icon: Computer, // Use an appropriate icon
          color: 'from-orange-600 to-red-600',
          image: '360poly.jpg',
        },
      ],
    },
    {
      id: 'vizzio',
      name: 'Vizzio',
      logo: 'vizzio copy.png', // Add the logo for Vizzio
      color: 'from-green-400 to-blue-500', // Choose a color gradient for Vizzio
      products: [
        {
          id: 'earth-ai',
          name: 'Earth AI',
          category: 'AI Solutions',
          description:
            'Earth AI is a powerful AI-driven platform designed to analyze and visualize geospatial data, providing insights for various applications.',
          partnerDescription:
            'Utilizing advanced algorithms and machine learning techniques, Earth AI transforms complex geospatial data into actionable insights, enabling better decision-making for businesses and organizations.',
          versions: [
            {
              name: 'Earth AI Platform',
              features: [
                'AI-driven geospatial analysis',
                'Real-time data visualization',
                'User -friendly interface',
                'Customizable dashboards',
                'Integration with various data sources',
              ],
              applications: [
                'Environmental monitoring',
                'Urban planning',
                'Disaster management',
                'Resource management',
              ],
              specifications: {
                'Data Sources': 'Satellite imagery, sensor data, and more',
                'Processing Power': 'Cloud-based processing for scalability',
                'User  Access': 'Web-based platform with multi-user support',
              },
            },
          ],
          icon: Earth, // Use an appropriate icon
          color: 'from-green-400 to-blue-500', // Choose a gradient color for Earth AI
          image: 'vizzio1.png', // Add an image for the Earth AI product
        },
        {
          id: 'polytron-ai',
          name: 'Polytron AI',
          category: 'AI Solutions',
          description:
            'Polytron AI leverages advanced artificial intelligence to enhance operational efficiency and decision-making processes across various industries.',
          partnerDescription:
            'With its robust algorithms and machine learning capabilities, Polytron AI provides actionable insights and predictive analytics to drive business success.',
          versions: [
            {
              name: 'Polytron AI Platform',
              features: [
                'Advanced machine learning algorithms',
                'Predictive analytics for business insights',
                'User -friendly interface for easy navigation',
                'Integration with existing systems',
                'Real-time data processing and visualization',
              ],
              applications: [
                'Business intelligence',
                'Operational efficiency',
                'Predictive maintenance',
                'Customer insights',
              ],
              specifications: {
                'Data Sources':
                  'Various data inputs including IoT devices and databases',
                'Processing Power': 'Cloud-based for scalability',
                'User  Access': 'Web-based platform with multi-user support',
              },
            },
          ],
          icon: EarthLockIcon, // Use an appropriate icon
          color: 'from-pink-400 to-purple-500', // Choose a gradient color for Polytron AI
          image: 'vizzio copy.png', // Add an image for the Polytron AI product
        },
      ],
    },
  ];

  const handlePartnerSelect = (partnerId: string) => {
    setSelectedPartner(partnerId);
    setSelectedProduct('');
    setIsPartnerDropdownOpen(false);
    setIsProductDropdownOpen(false);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setIsProductDropdownOpen(false);
  };

  const selectedPartnerData = partners.find((p) => p.id === selectedPartner);
  const selectedProductData = selectedPartnerData?.products.find(
    (p) => p.id === selectedProduct
  );
  const availableProducts = selectedPartnerData?.products || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Product Catalog
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technology
              products from industry-leading partners. Find the perfect solution
              for your business needs.
            </p>
          </div>

          {/* Dropdown Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Partner Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Brand
                </label>
                <button
                  onClick={() => {
                    setIsPartnerDropdownOpen(!isPartnerDropdownOpen);
                    setIsProductDropdownOpen(false);
                  }}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <span
                    className={
                      selectedPartner ? 'text-gray-900' : 'text-gray-500'
                    }
                  >
                    {selectedPartner
                      ? selectedPartnerData?.name
                      : 'Choose a partner...'}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isPartnerDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isPartnerDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {partners.map((partner) => (
                      <button
                        key={partner.id}
                        onClick={() => handlePartnerSelect(partner.id)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center"
                      >
                        <div
                          className={`w-8 h-8 ${partner.color} rounded-lg flex items-center justify-center mr-3`}
                        >
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                          />
                        </div>

                        {partner.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Product
                </label>
                <button
                  onClick={() => {
                    if (selectedPartner) {
                      setIsProductDropdownOpen(!isProductDropdownOpen);
                      setIsPartnerDropdownOpen(false);
                    }
                  }}
                  disabled={!selectedPartner}
                  className={`w-full border rounded-lg px-4 py-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    selectedPartner
                      ? 'bg-white border-gray-300 hover:border-blue-500'
                      : 'bg-gray-100 border-gray-200 cursor-not-allowed'
                  }`}
                >
                  <span
                    className={
                      selectedProduct ? 'text-gray-900' : 'text-gray-500'
                    }
                  >
                    {selectedProduct
                      ? selectedProductData?.name
                      : selectedPartner
                      ? 'Choose a product...'
                      : 'Select a partner first'}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      isProductDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isProductDropdownOpen && selectedPartner && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {availableProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductSelect(product.id)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center"
                      >
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mr-3`}
                        >
                          <product.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500">
                            {product.category}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Display */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedPartner && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select a Brand
              </h3>
              <p className="text-gray-600">
                Choose a Brand from the dropdown above to view their products.
              </p>
            </div>
          )}

          {selectedPartner && !selectedProduct && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPartnerData?.name} Products
                </h2>
                <p className="text-gray-600">
                  Select a specific product to view detailed information and
                  versions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-sm text-blue-600 mb-3">
                      {product.category}
                    </p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center text-blue-600 font-medium">
                      View Details
                      <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedProduct && selectedProductData && (
            <div>
              <div className="mb-8">
                <button
                  onClick={() => setSelectedProduct('')}
                  className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {selectedPartnerData?.name} Products
                </button>

                <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${selectedProductData.color} rounded-2xl flex items-center justify-center mr-6`}
                    >
                      <selectedProductData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {selectedProductData.name}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {selectedProductData.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg">
                    {selectedProductData.description}
                  </p>
                  {selectedProductData.image && (
                    <img
                      src={selectedProductData.image}
                      alt={selectedProductData.name}
                      className="mt-4 rounded-lg"
                    />
                  )}
                  {selectedProductData.partnerDescription && (
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                      {selectedProductData.partnerDescription
                        .split('\n')
                        .map((point, index) => (
                          <li key={index}>{point.replace('• ', '')}</li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Show comparison table only for BOE/AI-LA products with multiple versions */}
              {(selectedPartner === 'boe' ||
                selectedPartner === 'ai-la' ||
                selectedPartner === 'Nuera Commuincations' ||
                selectedPartner === 'Polytron') &&
              selectedProductData.versions.length > 1 ? (
                <ComparisonTable
                  productName={selectedProductData.name}
                  versions={selectedProductData.versions}
                />
              ) : (
                /* Show product/version details in all other cases */
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {selectedProductData.versions.length > 1
                      ? 'Available Versions'
                      : 'Product Details'}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {selectedProductData.versions.map((version, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {version.name}
                          </h4>

                          {/* Show technical specs only for BOE and AI-LA products */}
                          {(selectedPartner === 'boe' ||
                            selectedPartner === 'ai-la') && (
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              {version.screenSize && (
                                <div>
                                  <span className="text-gray-500">
                                    Screen Size:
                                  </span>
                                  <p className="font-medium">
                                    {version.screenSize}
                                  </p>
                                </div>
                              )}
                              <div>
                                <span className="text-gray-500">
                                  Resolution:
                                </span>
                                <p className="font-medium">
                                  {version.resolution}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Brightness:
                                </span>
                                <p className="font-medium">
                                  {version.brightness}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  OS Version:
                                </span>
                                <p className="font-medium">
                                  {[
                                    version.specifications['Operating System'],
                                    version.specifications['OS'],
                                  ]
                                    .filter(Boolean) // Filter out any undefined or null values
                                    .join(' Android') || 'Linux'}
                                  , {'Android '}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Features - shown for all products */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-800 mb-3">
                            Key Features
                          </h5>
                          <div className="space-y-2">
                            {version.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Applications - shown for all products */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-800 mb-3">
                            Applications
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {version.applications.map((app, appIndex) => (
                              <span
                                key={appIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Specifications - shown only for BOE and AI-LA products */}
                        {(selectedPartner === 'boe' ||
                          selectedPartner === 'ai-la') && (
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-3">
                              Specifications
                            </h5>
                            <div className="space-y-2 max-h-40 overflow-y-auto">
                              {/* Only display the filtered specifications */}
                              {[
                                {
                                  key: 'Brightness',
                                  value: version.brightness,
                                },
                                {
                                  key: 'Screen Size',
                                  value: version.screenSize,
                                },
                                {
                                  key: 'Resolution',
                                  value: version.resolution,
                                },
                                {
                                  key: 'OS Version',
                                  value:
                                    [
                                      version.specifications[
                                        'Operating System'
                                      ],
                                      version.specifications['OS'],
                                    ]
                                      .filter(Boolean) // Filter out any undefined or null values
                                      .join(' & ') || 'N/A', // Join with ' & ' if both exist
                                },
                              ].map(
                                ({ key, value }) =>
                                  value && (
                                    <div
                                      key={key}
                                      className="flex justify-between text-sm"
                                    >
                                      <span className="text-gray-600">
                                        {key}:
                                      </span>
                                      <span className="font-medium text-gray-900">
                                        {value}
                                      </span>
                                    </div>
                                  )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
