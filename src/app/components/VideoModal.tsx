import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface VideoModalProps {
  trigger: React.ReactNode;
  videoSrc: string;
  title?: string;
}

export const VideoModal = ({ trigger, videoSrc, title }: VideoModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[90vh] z-50 focus:outline-none">
          <div className="bg-black rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div className="relative flex-grow">
              <video
                controls
                className="w-full h-full max-h-[70vh] object-contain"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>

            {title && (
              <div className="p-4 bg-gray-900 text-white">
                <Dialog.Title className="text-xl font-semibold">
                  {title}
                </Dialog.Title>
              </div>
            )}

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white focus:outline-none"
                aria-label="Close"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
