import subprocess

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .bg-circle { fill: #000000; }
      .outer-ring { fill: none; stroke: #FFFFFF; stroke-width: 5; }
      .skull-red { fill: #DC242C; }
      .skull-dark { fill: #A5141C; }
      .stem-green { fill: #238544; }
      .stem-stroke { stroke: #111111; stroke-width: 3; }
      .black-feature { fill: #000000; }
      .white-detail { fill: #FFFFFF; }
    </style>
  </defs>

  <!-- 1. Black Background Badge -->
  <circle cx="500" cy="500" r="495" class="bg-circle" />

  <!-- 2. Concentric White Border Ring -->
  <circle cx="500" cy="500" r="480" class="outer-ring" />

  <!-- 3. TOP GREEN CHILI STEM & CALYX LEAF -->
  <!-- Stem loop -->
  <path d="M 645,280 
           C 660,230 690,170 740,140 
           C 785,115 825,145 810,195 
           C 795,235 745,245 715,285 
           C 685,270 655,275 645,280 Z" 
        fill="#238544" stroke="#000000" stroke-width="4" stroke-linejoin="round" />
  <!-- Stem interior curl detail -->
  <path d="M 730,165 
           C 760,135 790,150 785,185 
           C 780,215 745,225 725,250" 
        fill="none" stroke="#34A853" stroke-width="6" stroke-linecap="round" />
  
  <!-- Calyx Leaf base sitting on skull -->
  <path d="M 535,245 
           C 570,225 615,220 660,235 
           C 715,255 720,285 705,305 
           C 660,295 620,295 580,270 
           C 555,275 540,260 535,245 Z" 
        fill="#238544" stroke="#000000" stroke-width="4" stroke-linejoin="round" />
  <path d="M 570,240 Q 640,250 685,280" fill="none" stroke="#48C76D" stroke-width="4" stroke-linecap="round" />

  <!-- 4. RED SKULL (Chili-Pepper Shaped Cranium & Jaw) -->
  <g id="skull-chili">
    <!-- Main Cranium and Cheekbones -->
    <path d="M 545,240 
             C 455,248 375,300 365,390 
             C 360,425 365,465 390,490 
             C 415,515 410,545 400,565 
             C 385,595 440,610 475,605 
             L 485,570 
             L 505,625 
             L 525,620 
             L 540,626 
             L 560,622 
             L 580,627 
             L 600,623 
             L 615,628 
             L 635,622 
             L 645,560 
             C 675,590 735,575 750,545 
             C 770,505 760,465 775,430 
             C 790,390 780,310 710,265 
             C 665,235 595,235 545,240 Z" 
          class="skull-red" stroke="#000000" stroke-width="4" stroke-linejoin="round" />

    <!-- Left Eye Socket -->
    <path d="M 425,480 
             C 415,445 440,420 480,425 
             C 525,430 545,455 530,495 
             C 515,525 480,545 445,535 
             C 425,530 420,505 425,480 Z" 
          class="black-feature" />
    <path d="M 435,475 L 450,450 L 510,445 L 515,490 L 465,520 Z" fill="#000000" />

    <!-- Right Eye Socket -->
    <path d="M 590,485 
             C 585,445 615,420 655,415 
             C 700,410 725,445 720,480 
             C 715,520 685,540 645,535 
             C 610,530 595,515 590,485 Z" 
          class="black-feature" />
    <path d="M 605,480 L 630,440 L 700,435 L 705,485 L 650,520 Z" fill="#000000" />

    <!-- Inverted Heart / Triangle Nasal Cavity -->
    <path d="M 565,480 
             L 575,525 
             C 575,545 565,555 550,555 
             C 540,555 530,540 535,520 
             L 550,480 Z" 
          class="black-feature" />
    <path d="M 565,480 
             L 580,520 
             C 585,540 575,555 565,555 
             C 555,555 545,545 545,525 
             L 555,480 Z" 
          class="black-feature" />

    <!-- White Teeth Row on Upper Jaw -->
    <g class="white-detail">
      <!-- Tooth 1 -->
      <polygon points="488,618 493,634 499,619" />
      <!-- Tooth 2 -->
      <polygon points="503,618 510,637 517,618" />
      <!-- Tooth 3 -->
      <polygon points="522,618 530,638 538,619" />
      <!-- Tooth 4 -->
      <polygon points="543,619 552,640 560,619" />
      <!-- Tooth 5 -->
      <polygon points="566,619 575,640 584,619" />
      <!-- Tooth 6 -->
      <polygon points="589,618 597,637 605,618" />
      <!-- Tooth 7 -->
      <polygon points="610,617 618,635 625,618" />
      <!-- Tooth 8 -->
      <polygon points="627,618 632,630 637,619" />
    </g>
  </g>

  <!-- 5. TYPOGRAPHY "ají" (Stacked to the left of the skull) -->
  <g id="text-aji" class="white-detail">
    <!-- Letter 'a' -->
    <path d="M 235,395 
             C 215,385 185,385 165,405 
             C 145,425 140,465 155,490 
             C 170,515 205,520 230,505 
             L 230,520 
             L 255,520 
             L 255,445 
             C 255,410 248,398 235,395 Z 
             M 230,475 
             C 220,490 195,495 180,480 
             C 168,468 170,440 185,425 
             C 200,412 220,418 230,435 Z" />
    <!-- 'a' spiky thorns and serifs -->
    <polygon points="255,435 272,442 255,450" />
    <polygon points="142,445 130,455 145,465" />
    <polygon points="230,380 248,370 255,392" />

    <!-- Letter 'j' -->
    <path d="M 275,415 L 302,415 L 302,525 
             C 302,565 290,595 255,605 
             C 235,610 215,600 205,590 
             L 218,572 
             C 228,580 240,585 255,580 
             C 272,575 278,555 278,525 
             L 278,415 Z" />
    <!-- 'j' spiky thorn and tittle -->
    <polygon points="302,455 318,463 302,472" />
    <polygon points="275,465 260,457 275,450" />
    <!-- Dot on j -->
    <polygon points="288,370 302,385 288,400 274,385" />

    <!-- Letter 'í' -->
    <path d="M 325,415 L 352,415 L 352,520 L 325,520 Z" />
    <!-- 'í' spiky thorn -->
    <polygon points="352,460 368,468 352,477" />
    <polygon points="325,470 310,462 325,455" />
    <polygon points="322,415 338,402 355,415" />
    <!-- Accent / Dot on i -->
    <polygon points="338,368 355,385 338,402 322,385" />
  </g>

  <!-- 6. TYPOGRAPHY "veneno®" (Arched banner across bottom) -->
  <g id="text-veneno" class="white-detail">
    <!-- Letter 'v' -->
    <path d="M 145,670 L 175,670 L 205,790 L 235,670 L 265,670 L 220,830 L 190,830 Z" />
    <!-- 'v' spikes -->
    <polygon points="142,670 155,655 175,670" />
    <polygon points="268,670 255,655 235,670" />
    <polygon points="185,735 170,745 190,755" />
    <polygon points="220,735 235,745 215,755" />
    <polygon points="205,830 205,855 218,830" />

    <!-- Letter 'e' (1st) -->
    <path d="M 285,735 
             C 285,690 315,660 360,660 
             C 405,660 430,695 430,740 
             L 315,740 
             C 318,775 340,795 375,795 
             C 398,795 412,785 422,772 
             L 442,788 
             C 425,815 398,832 365,832 
             C 315,832 285,790 285,735 Z 
             M 398,715 
             C 395,692 380,682 360,682 
             C 338,682 322,695 318,715 Z" />
    <!-- 'e' spike -->
    <polygon points="285,735 268,742 285,752" />
    <polygon points="430,735 448,742 430,752" />

    <!-- Letter 'n' (1st) -->
    <path d="M 458,680 L 485,680 L 485,710 
             C 500,685 528,670 560,670 
             C 598,670 615,695 615,735 
             L 615,825 L 585,825 L 585,745 
             C 585,718 575,702 550,702 
             C 525,702 515,720 515,748 
             L 515,825 L 485,825 L 485,680 Z" />
    <!-- 'n' spikes -->
    <polygon points="455,680 470,665 488,680" />
    <polygon points="485,745 468,752 485,762" />
    <polygon points="615,745 632,752 615,762" />

    <!-- Letter 'e' (2nd) -->
    <path d="M 640,735 
             C 640,690 670,660 715,660 
             C 760,660 785,695 785,740 
             L 670,740 
             C 672,775 695,795 730,795 
             C 752,795 768,785 778,772 
             L 798,788 
             C 780,815 755,832 720,832 
             C 670,832 640,790 640,735 Z 
             M 752,715 
             C 750,692 735,682 715,682 
             C 692,682 678,695 674,715 Z" />
    <polygon points="640,735 622,742 640,752" />
    <polygon points="785,735 802,742 785,752" />

    <!-- Letter 'ñ' / 'n' (2nd) -->
    <path d="M 810,680 L 838,680 L 838,710 
             C 852,685 880,670 910,670 
             C 945,670 962,695 962,735 
             L 962,825 L 932,825 L 932,745 
             C 932,718 922,702 898,702 
             C 875,702 865,720 865,748 
             L 865,825 L 838,825 L 838,680 Z" 
          transform="translate(-175, 45) scale(0.92, 0.95)" />
    <!-- Tilde ~ over the ñ (optional accent seen in Chilean graphic culture) -->
    <path d="M 605,672 C 615,660 635,660 645,672 C 655,682 675,682 685,672" 
          fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />

    <!-- Letter 'o' -->
    <path d="M 720,745 
             C 720,695 755,660 805,660 
             C 855,660 890,695 890,745 
             C 890,795 855,830 805,830 
             C 755,830 720,795 720,745 Z 
             M 858,745 
             C 858,710 835,688 805,688 
             C 775,688 752,710 752,745 
             C 752,780 775,802 805,802 
             C 835,802 858,780 858,745 Z" />
    <!-- 'o' side thorns -->
    <polygon points="720,745 702,752 720,762" />
    <polygon points="890,745 908,752 890,762" />

    <!-- ® Registered Mark Symbol -->
    <circle cx="895" cy="675" r="16" fill="none" stroke="#FFFFFF" stroke-width="3" />
    <text x="895" y="682" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF" text-anchor="middle">R</text>
  </g>
</svg>'''

with open('public/logo.svg', 'w') as f:
    f.write(svg_content)

print("SVG created successfully at public/logo.svg")
