import { SVGProps } from "react";
import Link from "next/link";

const LogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <header>
    <Link href="https://pacifiscan.org">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={256}
          height={128}
          fill="none"
          className="logo"
          {...props}
        >
          <circle cx={127.903} cy={47.903} r={25.903} fill="#fff" />
          <circle
            cx={127.903}
            cy={47.903}
            r={25.903}
            fill="#b9b4ff"
            fillOpacity={0.3}
          />
          <path
            d="M153.806 47.903c0 14.306-11.597 25.903-25.903 25.903S102 62.209 102 47.903c8.03-6.994 11.597 3.367 25.903 3.367s25.903-17.673 25.903-3.367z"
            fill="#7879f1"
          />
          <path
            d="M153.806 47.903c0 14.306-11.597 25.903-25.903 25.903S102 62.209 102 47.903s25.844 8.03 40.15 8.03 11.656-22.336 11.656-8.03z"
            fill="#a5a6f6"
          />
          <path
            d="M73.796 100V83.2h6c.912 0 1.736.228 2.472.684a4.98 4.98 0 0 1 1.764 1.836c.432.768.648 1.612.648 2.532 0 .944-.224 1.8-.672 2.568-.44.76-1.032 1.368-1.776 1.824-.744.448-1.556.672-2.436.672h-3.072V100h-2.928zm2.928-9.612h2.76a2.16 2.16 0 0 0 1.14-.312c.344-.208.616-.488.816-.84.208-.352.312-.744.312-1.176a2.29 2.29 0 0 0-.312-1.188c-.2-.352-.472-.632-.816-.84a2.16 2.16 0 0 0-1.14-.312h-2.76v4.668zM95.316 88h2.928v12h-2.94l-.12-1.488c-.336.536-.776.972-1.32 1.308-.536.328-1.168.492-1.896.492-.888 0-1.72-.168-2.496-.504a6.56 6.56 0 0 1-2.052-1.392c-.592-.592-1.052-1.276-1.38-2.052s-.492-1.608-.492-2.496a6.23 6.23 0 0 1 .468-2.412 6.05 6.05 0 0 1 1.32-1.98 6.25 6.25 0 0 1 1.968-1.332c.744-.32 1.544-.48 2.4-.48.8 0 1.512.176 2.136.528.632.352 1.168.8 1.608 1.344L95.316 88zm-3.264 9.492c.64 0 1.196-.164 1.668-.492s.828-.764 1.068-1.308c.248-.552.348-1.16.3-1.824-.056-.624-.24-1.188-.552-1.692a3.66 3.66 0 0 0-1.2-1.224c-.488-.304-1.036-.456-1.644-.456-.632 0-1.2.164-1.704.492-.496.328-.88.768-1.152 1.32-.272.544-.38 1.152-.324 1.824.064.616.264 1.18.6 1.692.336.504.76.908 1.272 1.212a3.25 3.25 0 0 0 1.668.456zm16.09-1.104l2.64 1.428c-.552.752-1.244 1.356-2.076 1.812s-1.74.684-2.724.684c-1.104 0-2.112-.284-3.024-.852-.904-.568-1.628-1.328-2.172-2.28-.536-.96-.804-2.02-.804-3.18 0-.88.156-1.7.468-2.46.312-.768.74-1.44 1.284-2.016a6.02 6.02 0 0 1 1.92-1.368 5.6 5.6 0 0 1 2.328-.492c.984 0 1.892.228 2.724.684s1.524 1.068 2.076 1.836l-2.64 1.416c-.28-.32-.612-.568-.996-.744-.376-.176-.764-.264-1.164-.264-.576 0-1.096.16-1.56.48-.464.312-.832.728-1.104 1.248-.272.512-.408 1.072-.408 1.68a3.57 3.57 0 0 0 .408 1.68c.272.512.64.924 1.104 1.236s.984.468 1.56.468a2.77 2.77 0 0 0 1.188-.264c.376-.184.7-.428.972-.732zM112.491 88h2.928v12h-2.928V88zm1.476-1.788c-.424 0-.784-.14-1.08-.42-.296-.288-.444-.648-.444-1.08a1.43 1.43 0 0 1 .444-1.068 1.49 1.49 0 0 1 1.08-.432 1.45 1.45 0 0 1 1.068.432 1.43 1.43 0 0 1 .444 1.068c0 .432-.148.792-.444 1.08-.288.28-.644.42-1.068.42zm8.857-.732V88h3.276v2.928h-3.276V100h-2.928v-9.072h-1.308V88h1.308v-2.52a3.63 3.63 0 0 1 .504-1.884c.344-.576.804-1.032 1.38-1.368a3.65 3.65 0 0 1 1.908-.516 3.85 3.85 0 0 1 1.5.312 3.64 3.64 0 0 1 1.32.96l-2.112 2.064c-.072-.136-.176-.236-.312-.3-.128-.072-.26-.108-.396-.108a.86.86 0 0 0-.612.252.78.78 0 0 0-.252.588zm5.159 2.52h2.928v12h-2.928V88zm1.476-1.788c-.424 0-.784-.14-1.08-.42-.296-.288-.444-.648-.444-1.08a1.43 1.43 0 0 1 .444-1.068 1.49 1.49 0 0 1 1.08-.432 1.45 1.45 0 0 1 1.068.432 1.43 1.43 0 0 1 .444 1.068c0 .432-.148.792-.444 1.08-.288.28-.644.42-1.068.42zm8.934 14.004a6.64 6.64 0 0 1-1.812-.372c-.576-.216-1.088-.508-1.536-.876s-.792-.808-1.032-1.32l2.472-1.056c.096.16.252.332.468.516.216.176.472.324.768.444a2.69 2.69 0 0 0 .996.18c.304 0 .592-.04.864-.12a1.55 1.55 0 0 0 .672-.396c.176-.176.264-.404.264-.684 0-.296-.104-.524-.312-.684-.2-.168-.456-.292-.768-.372l-.888-.24c-.76-.152-1.468-.388-2.124-.708-.648-.32-1.172-.732-1.572-1.236-.392-.512-.588-1.128-.588-1.848 0-.792.208-1.476.624-2.052s.964-1.02 1.644-1.332 1.412-.468 2.196-.468c.952 0 1.824.2 2.616.6.8.392 1.432.948 1.896 1.668l-2.316 1.368a1.92 1.92 0 0 0-.468-.528c-.2-.168-.428-.304-.684-.408a2.32 2.32 0 0 0-.804-.192c-.36-.016-.688.016-.984.096s-.536.216-.72.408c-.176.192-.264.448-.264.768 0 .304.12.532.36.684.24.144.528.256.864.336l.984.264c.704.232 1.364.516 1.98.852.624.336 1.124.748 1.5 1.236s.556 1.072.54 1.752c0 .776-.232 1.456-.696 2.04-.464.576-1.064 1.016-1.8 1.32-.728.304-1.508.424-2.34.36zm14.257-3.828l2.64 1.428c-.552.752-1.244 1.356-2.076 1.812s-1.74.684-2.724.684c-1.104 0-2.112-.284-3.024-.852-.904-.568-1.628-1.328-2.172-2.28-.536-.96-.804-2.02-.804-3.18 0-.88.156-1.7.468-2.46.312-.768.74-1.44 1.284-2.016a6.02 6.02 0 0 1 1.92-1.368 5.6 5.6 0 0 1 2.328-.492c.984 0 1.892.228 2.724.684s1.524 1.068 2.076 1.836l-2.64 1.416c-.28-.32-.612-.568-.996-.744-.376-.176-.764-.264-1.164-.264-.576 0-1.096.16-1.56.48-.464.312-.832.728-1.104 1.248-.272.512-.408 1.072-.408 1.68a3.57 3.57 0 0 0 .408 1.68c.272.512.64.924 1.104 1.236s.984.468 1.56.468a2.77 2.77 0 0 0 1.188-.264c.376-.184.7-.428.972-.732zM166.191 88h2.928v12h-2.94l-.12-1.488c-.336.536-.776.972-1.32 1.308-.536.328-1.168.492-1.896.492-.888 0-1.72-.168-2.496-.504a6.56 6.56 0 0 1-2.052-1.392c-.592-.592-1.052-1.276-1.38-2.052s-.492-1.608-.492-2.496a6.23 6.23 0 0 1 .468-2.412 6.05 6.05 0 0 1 1.32-1.98 6.25 6.25 0 0 1 1.968-1.332c.744-.32 1.544-.48 2.4-.48.8 0 1.512.176 2.136.528.632.352 1.168.8 1.608 1.344L166.191 88zm-3.264 9.492c.64 0 1.196-.164 1.668-.492s.828-.764 1.068-1.308c.248-.552.348-1.16.3-1.824-.056-.624-.24-1.188-.552-1.692a3.66 3.66 0 0 0-1.2-1.224c-.488-.304-1.036-.456-1.644-.456-.632 0-1.2.164-1.704.492-.496.328-.88.768-1.152 1.32-.272.544-.38 1.152-.324 1.824.064.616.264 1.18.6 1.692.336.504.76.908 1.272 1.212a3.25 3.25 0 0 0 1.668.456zm20.52-3.696V100h-2.928v-6.156c0-.616-.128-1.176-.384-1.68-.256-.512-.612-.92-1.068-1.224-.448-.304-.968-.456-1.56-.456-.576 0-1.076.152-1.5.456s-.752.712-.984 1.224c-.224.504-.336 1.064-.336 1.68V100h-2.928V88h2.928v1.416c.4-.536.876-.96 1.428-1.272.56-.32 1.192-.48 1.896-.48 1.104 0 2.06.28 2.868.84a5.43 5.43 0 0 1 1.884 2.22c.448.928.676 1.952.684 3.072z"
            fill="#3935ff"
          />
        </svg>
      </a>
    </Link>
  </header>
);

export default LogoSVG;
